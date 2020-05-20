var { v4: uuidv4 } = require("uuid");
var _ = require("lodash");
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var mongoClient = require("mongodb").MongoClient;

// db.
let mongoConnectionString = "mongodb://127.0.0.1:27017";
let db;
let usersCollection;

mongoClient
    .connect(mongoConnectionString)
    .then((client) => {
        db = client.db("project");
        usersCollection = db.collection("users");
    })
    .catch((error) => {
        console.log(error);
    });

/* GET all users */
router.get("/", function(req, res, next) {
    usersCollection.find().toArray((error, users) => {
        if (users) res.send({ successful: true, body: users });
        else res.send({ successful: false, body: error });
    })
});

/* ADD new store manager */
router.post("/managers", function(req, res, next) {
    let user = req.body.user;
    user._id = user.email;

    usersCollection.insert(user, (error, result) => {
        if (error) res.send({ successful: false, body: error.errmsg });
        else {
            sendMail(
                user.email,
                "Password:" + user.password
            ).catch((error) => console.log(error));
            res.send({ successful: true });
        }
    });
});

/* ADD new customer */
router.post("/customers", function(req, res, next) {
    let user = req.body.user;
    user._id = user.email;
    user.role = "customer";

    usersCollection.insert(user, (error, user) => {
        if (error) res.send({ successful: false, body: error.errmsg });
        else if (user) res.send({ successful: true });
    });
});

/* UPDATE user */
router.put("/", function(req, res, next) {
    let user = req.body.user;

    usersCollection.updateOne({ _id: user.email }, { $set: user }, (error, result) => {
        if (error) res.send({ successful: false, body: error });
        else res.send({ successful: true });
    });
})

/* DELETE user */
router.delete("/:email", function(req, res, next) {
    let email = req.params.email;
    usersCollection.remove({ _id: email }, (error, result) => {
        if (result) res.send({ successful: true });
        else res.send({ successful: false });
    })
});

/* LOGIN */
router.post("/login", function(req, res, next) {
    let credentials = req.body.credentials;
    let email = credentials.email;
    let password = credentials.password;

    usersCollection.findOne({ _id: email }, (error, user) => {
        if (user) {
            let successful = user.password === password;
            delete user.password; // insecure to send back a password.

            res.send({ successful: successful, user: user });
        } else res.send({ successful: false });
    });
});

/* ADD to Wishlist */
router.post("/:id/wishlist", function(req, res, next) {
    let email = req.params.id;
    let wishedItem = req.body.item;

    usersCollection.findOne({ _id: email }, { wishlist: 1 }, (error, result) => {
        let wishlist = result.wishlist ? result.wishlist : [];
        wishlist.push(wishedItem);
        wishlist = _.uniqBy(wishlist, e => { return e._id }); // Remove duplicates since we don't care about the count for wishlists.

        // Put it back to DB.
        usersCollection.updateOne({ _id: email }, { $set: { wishlist: wishlist } },
            (error, result) => {
                if (result) res.send({ successful: true });
                else res.send({ successful: false });
            }
        );
    });
});

/* GET Wishlist */
router.get("/:id/wishlist", function(req, res, next) {
    let email = req.params.id;

    usersCollection.findOne({ _id: email }, { wishlist: 1 },
        (error, result) => {
            if (result.wishlist) {
                // Remove reviews and other unnecessary fields from each item in the wishlist.
                let wishlist = [];
                result.wishlist.forEach(item => {
                    delete item.reviews;
                    wishlist.push(item);
                });
                res.send({ successful: true, wishlist: wishlist });
            } else res.send({ successful: false, wishlist: [] });
        },
        () => res.send({ successful: false, wishlist: [] })
    );
});

/* DELETE from Wishlist */
router.delete("/:email/wishlist/items/:id", function(req, res, next) {
    let email = req.params.email;
    let id = req.params.id

    usersCollection.findOne({ _id: email }, { wishlist: 1 },
        (error, result) => {
            if (result) {
                // Remove one item.
                let indexToRemove = -1;
                let wishlist = result.wishlist
                wishlist.map((item, index) => { if (item._id === id) indexToRemove = index });
                if (indexToRemove >= 0) wishlist.splice(indexToRemove, 1);

                usersCollection.updateOne({ _id: email }, { $set: { wishlist: wishlist } },
                    (error, result) => {
                        if (result) res.send({ successful: true });
                        else res.send({ successful: false });
                    }
                );
            } else res.send({ successful: false, wishlist: [] });
        },
        () => res.send({ successful: false, wishlist: [] })
    );
});

/* Send email */
async function sendMail(to, body) {
    var user = "e61425291e9fcd";
    var password = "a2b234067448b1";

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: user,
            pass: password
        }
    });

    var mailOptions = {
        from: "admin@shopperrrr.com",
        to: to,
        subject: "Your account has been created in Shopperrrr",
        text: body
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = router;