var { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
var multiparty = require("multiparty");
var axios = require("axios");
var multer = require("multer");
var mongoClient = require("mongodb").MongoClient;

// db.
let mongoConnectionString = "mongodb://127.0.0.1:27017";
let db;
let itemsCollection;
let categoryCollection;

// file uploading.
let storage = multer.diskStorage({
    destination: function(req, file, cb) { cb(null, "public"); },
    filename: function(req, file, cb) { cb(null, file.originalname); }
});
let upload = multer({ storage: storage }).single("file");

mongoClient
    .connect(mongoConnectionString)
    .then((client) => {
        db = client.db("project");
        itemsCollection = db.collection("items");
        categoryCollection = db.collection("categories");
    })
    .catch((error) => {
        console.log(error);
    });

/* GET all items */
router.get("/", function(req, res, next) {
    itemsCollection.find().toArray((err, items) => {
        res.send({ body: items });
    });
});

router.get("/by/:category", function(req, res, next) {
    let category = req.params.category;
    itemsCollection.find({ category: category }).toArray((err, items) => {
        res.send({ body: items });
    })
})

/* ADD new item */
router.post("/", function(req, res, next) {
    let id = uuidv4();
    let item = { _id: id, reviews: [], discount: 0.0, ratings: {}, averageRating: 0 };

    Object.keys(req.body.item).forEach((key) => {
        item[key] = req.body.item[key];
    });

    itemsCollection
        .insertOne(item)
        .then(result => res.send({ successful: true }))
        .catch(error => res.send({ successful: false, body: error.errmsg }));
});

/* ADD image */
router.post("/images/", function(req, res, next) {
    upload(req, res, function(error) {
        if (error) { res.status(500).json(error); } else { res.status(200).send(req.file); }
    })
});

/* UPDATE existing item */
router.put("/", function(req, res, next) {
    let item = req.body.item;
    let id = item._id;

    itemsCollection.updateOne({ _id: id }, { $set: item }, (error, result) => {
        if (error) res.send({ successful: false, body: error });
        else res.send({ successful: true });
    });
});

/* DELETE item */
router.delete("/:id", function(req, res, next) {
    let id = req.params.id;
    itemsCollection.remove({ _id: id }, (error, result) => {
        if (result) res.send({ successful: true });
        else res.send({ successful: false });
    })
});

/* GET total cost */
router.post("/total", function(req, res, next) {
    let selectedItems = req.body;

    // Processing is done by a Spring Boot backend. This is a pass-through/proxy.
    axios
        .post("http://localhost:8080/items/total", selectedItems)
        .then((result) => res.send(result.data))
        .catch((error) => res.send(error));
});

/* ADD a review for a product */
router.post("/:id/review", function(req, res, next) {
    let timestamp = new Date();
    let id = req.params.id;
    let review = { time: timestamp, message: req.body.review };

    itemsCollection.updateOne({ _id: id }, { $push: { reviews: review } },
        (error, result) => {
            if (error) {
                console.log(error);
            }
        }
    );
});

/* ADD a rating; Only one rating per user */
router.post("/:id/ratings", function(req, res, next) {
    let id = req.params.id;
    let rating = req.body.rating;
    let email = rating.email;
    let ratingValue = rating.value;
   
    // To make sure that only one rating can be given by one user,
    // we store rating values against the username/email.
    // Also, since we are storing a hashmaps of 2 levels, we need to make sure,
    // that no key has a dot (Emails have dots!).
    email = email.replace('.', '_').replace('@', '_');
    itemsCollection.findOne({ _id: id }, { ratings: 1 }, (error, result) => {
        if (result) {
            ratings = result.ratings ? result.ratings : {};
            ratings[email] = ratingValue;

            // Calculate average rating as well.
            let totalRating = 0;
            let totalNumberOfRatings = Object.keys(ratings).length;
            Object.keys(ratings).forEach(email => totalRating += parseInt(ratings[email]));
            let averageRating = parseInt(totalRating / totalNumberOfRatings);

            itemsCollection.updateOne({ _id: id }, { $set: { ratings: ratings, averageRating: averageRating } },
                (error, result) => {
                    if (result) res.send({ successful: true });
                    else res.send({ successful: false, body: error.errmsg });
                }
            );
        }
        else res.send({ successful: false, body: error.errmsg });
    });
});

/* GET all ratings for a product */
router.get("/:id/ratings", function(req, res, next) {
    let id = req.params.id;
    itemsCollection.findOne({ _id: id }, { ratings: 1 }, (error, result) => {
        if (result.ratings) {
            // Ratings is a hashmap of < email : rating >
            let ratings = result.ratings;
            let totalRating = 0;
            let totalNumberOfRatings = Object.keys(ratings).length;

            Object.keys(ratings).forEach(email => totalRating += parseInt(ratings[email]));
            let averageRating = parseInt(totalRating / totalNumberOfRatings);
            res.send({ successful: true, rating: averageRating });
        } else res.send({ successful: false, body: error});
    });
});

/* GET all reviews for a product */
router.get("/:id/reviews", function(req, res, next) {
    let id = req.params.id;
    itemsCollection.findOne({ _id: id }, { reviews: 1 }, (error, result) => {
        if (result) {
            // Showing timestamp in the UI is ugly. Instead showing # of days ago.
            // Also sort from recent to oldest.
            let reviews = [];
            let sortedReviews = result.reviews.sort((a, b) =>
                a.time < b.time ? 1 : -1
            );
            sortedReviews.forEach((review) => {
                review.time = review.time.toLocaleString();
                reviews.push(review);
            });
            res.send({ reviews: reviews });
        } else res.send(error.errmsg);
    });
});


module.exports = router;
