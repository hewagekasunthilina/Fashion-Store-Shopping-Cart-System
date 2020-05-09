const express = require("express");
const router = express.Router();
const Category = require("../Model/Fashion.model")
const Users = require("../Model/Users.model")

router.post("/category", (req, res, next) => {
    Category.create(req.body)
        .then((category) => {
            res.send(category);
        })
        .catch(next);
});

router.get("/category", (req, res, next) => {
    Category.find({}, (err, category) => {
        var categoryMap = {};

        category.forEach((category) => {
            categoryMap[category.id] = category;
        });

        res.send(categoryMap);
    }).catch(next);
});

module.exports = router;

router.get("/category/:id", (req, res, next) => {
    Category.find({id: req.params.id}, (err, category) => {
        var categoryMap = {};

        category.forEach((category) => {
            categoryMap[category.id] = category;
        });

        res.send(categoryMap);
    }).catch(next);
});

router.delete("/category/:id", (req, res, next) => {
    Category.deleteOne({id: req.params.id}, (err, result) => {
        if (result.deletedCount) {
            res.json({
                message: `deleted ${req.params.id}`,
            });
        } else {
            res.json({
                message: `deleted failed ${req.params.id}`,
            });
        }
    }).catch(next);
});

router.post("/signup", (req, res, next) => {
    Users.create(req.body)
        .then((users) => {
            res.send(users);
        })
        .catch(next);
});
