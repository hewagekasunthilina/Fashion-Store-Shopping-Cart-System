var { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

// db.
let mongoConnectionString = "mongodb://127.0.0.1:27017";
let db;
let paymentsCollection;

mongoClient
  .connect(mongoConnectionString)
  .then((client) => {
    db = client.db("project");
    paymentsCollection = db.collection("payments");
  })
  .catch((error) => {
    console.log(error);
  });

/* ADD new store manager */
router.post("/", function (req, res, next) {
  let id = uuidv4();
  let payment = req.body.payment;
  payment._id = id;

  paymentsCollection.insert(payment, (error, result) => {
    if (error) res.send({ successful: false, body: error.errmsg });
    else res.send({ successful: true });
  });
});


module.exports = router;
