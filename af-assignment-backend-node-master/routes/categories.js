var express = require("express");
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

// db.
let mongoConnectionString = "mongodb://127.0.0.1:27017";
let db;
let categoryCollection;


mongoClient
    .connect(mongoConnectionString)
    .then((client) => {
        db = client.db("project");
        categoryCollection = db.collection("categories");
    })
    .catch((error) => {
        console.log(error);
    });

/* ADD a category */
router.post("/", function(req, res, next) {
    let category = req.body.category;
    category._id = category.name;

    categoryCollection
        .insertOne(category)
        .then(result => res.send({ successful: true }))
        .catch(error => res.send({ successful: false, body: error.errmsg }));
});

/* GET all categories */
router.get("/", function(req, res, next) {
    categoryCollection.find().toArray((err, items) => {
        if (items) res.send({ successful: true, body: items });
        else res.send({ successful: false, body: error.errmsg });
    });
});

/* UPDATE existing category */
router.put("/", function(req, res, next) {
    let category = req.body.category;
    let name = category.name;

    categoryCollection.updateOne({ _id: name }, { $set: category }, (error, result) => {
        if (error) res.send({ successful: false, body: error });
        else res.send({ successful: true });
    });
});

/* DELETE item */
router.delete("/:name", function(req, res, next) {
    let name = req.params.name;
    categoryCollection.remove({ _id: name }, (error, result) => {
        if (result) res.send({ successful: true });
        else res.send({ successful: false });
    })
});


module.exports = router;

