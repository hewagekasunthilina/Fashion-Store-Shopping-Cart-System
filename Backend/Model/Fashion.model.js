const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_id: { type: Number, required: true, unique: true },
    category_name: { type: String, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
