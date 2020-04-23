'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/Backend/category', (req, res) => { //lists all  available products
    console.log("request received for get categories");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("FashionDB");
        dbo.collection("category").find({}).toArray(function (err, result) {
            if (err) throw err;
            // console.log(result);
            let rrr = [];
            rrr.push(result);
            res.send(result);
            db.close();
        });
    });
});

app.post('/Backend/category', (req, res) => {

    console.log(req.body.category_name + req.body.category_number);

    var tempItemObj = new Object();

    tempItemObj.category_name = req.body.category_name;
    tempItemObj.category_number = req.body.category_number;

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("FashionDB");
        dbo.collection("category").insertOne(tempItemObj, function (err1, res1) {
            if (err1) throw err1;
            console.log("Category added.");
            res.send(true);
            db.close();

        });
    });

});

app.post('/Backend/category/delete/', (req, res) => {

    console.log(req.body.category_name);

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("FashionDB");

        var myquery = { id: req.body.category_name };
        console.log(myquery);

        dbo.collection("category").deleteOne(myquery, function (err1, result) {
            if (err1) throw err1;
            console.log("Category was deleted");
            res.send(true);
            db.close();
        });

    });

});

const PORT = 3000;
app.listen(PORT);
console.log('Backend runnging on port ' + PORT + ': ');
