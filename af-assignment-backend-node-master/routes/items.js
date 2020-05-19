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

/* ADD new item */
router.post("/", function(req, res, next) {
    let id = uuidv4();
    let item = { _id: id, reviews: [], discount: 0.0 };

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

/* GET all reviews for a product */
router.get("/:id/reviews", function(req, res, next) {
    let id = req.params.id;
    console.log(id);
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

/* ADD a category */
router.post("/categories", function(req, res, next) {
    let category = req.body.category;
    category._id = category.name;

    categoryCollection
        .insertOne(category)
        .then(result => res.send({ successful: true }))
        .catch(error => res.send({ successful: false, body: error.errmsg }));
});

/* GET all categories */
router.get("/categories", function(req, res, next) {
    categoryCollection.find().toArray((err, items) => {
        if (items) res.send({ successful: true, body: items });
        else res.send({ successful: false, body: error.errmsg });
    });
});

module.exports = router;
module.exports = router;
module.exports = router;