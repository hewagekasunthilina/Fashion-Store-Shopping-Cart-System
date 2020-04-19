const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Category = new Schema({
    category_name: {
        type: String
    },
    category_number: {
        type: Number
    },
},{
    collection: 'category'
});

module.exports = mongoose.model('Category', Category);
