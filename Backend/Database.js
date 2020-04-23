var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var url1 = "mongodb://localhost:27017/FashionDB";

MongoClient.connect(url1, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("FashionDB");
    dbo.createCollection("category", function(err, res) {
        if (err) throw err;
        console.log("category Collection created!");
        db.close();
    });
});


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("FashionDB");
    dbo.createCollection("users", function(err, res) {
        if (err) throw err;
        console.log("users Collection created!");
        db.close();
    });
});
