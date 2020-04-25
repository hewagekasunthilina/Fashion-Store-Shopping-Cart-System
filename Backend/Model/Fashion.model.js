const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    category_name: { type: String, required: true },
    category_number: { type: String, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
