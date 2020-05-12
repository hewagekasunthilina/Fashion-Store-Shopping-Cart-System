const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./Routes/Users.routs")

mongoose
    .connect(
        "mongodb+srv://FashionCluster:fashionstore500@fashioncluster-a2dyx.gcp.mongodb.net/FashionDB?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(PORT);
        console.log("Server Running" + PORT);
        console.log("Database Connected")
    })
    .catch(error => {
        console.log(error);
    });



app.use(passport.initialize());
require("./Controller/passport")(passport);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api", require('./Routes/Fashion.routes'));

app.use("/api/users", users);
