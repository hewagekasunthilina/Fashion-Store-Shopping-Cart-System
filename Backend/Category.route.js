const express = require('express');
const categoryRoutes = express.Router();

let Category = require('./Category.model');

// Defined store route
categoryRoutes.route('/add').post(function (req, res) {
    let category = new Category(req.body);
    category.save()
        .then(business => {
            res.status(200).json({'category': 'category added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
categoryRoutes.route('/').get(function (req, res) {
    Category.find(function(err, categories){
        if(err){
            console.log(err);
        }
        else {
            res.json(categories);
        }
    });
});

// Defined edit route
categoryRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Category.findById(id, function (err, category){
        res.json(category);
    });
});

//  Defined update route
categoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function(err, category) {
        if (!category)
            res.status(404).send("data is not found");
        else {
            category.category_name = req.body.category_name;
            category.category_number = req.body.category_number;

            category.save().then(category => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
categoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = categoryRoutes;
