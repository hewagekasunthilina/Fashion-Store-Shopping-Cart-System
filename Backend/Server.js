const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3900;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
    .connect(
        "mongodb+srv://FashionCluster:fashionstore500@fashioncluster-a2dyx.gcp.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(3900);
    })
    .catch(error => {
        console.log(error);
    });
