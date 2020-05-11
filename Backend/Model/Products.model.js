const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_code: { type: String, required: true },
    product_name: { type: String, required: true },
    product_description:{ type: String, required: true },
    product_cat:{ type: String, required: true },
    product_qty:{ type: String, required: true },
    product_price:{ type: String, required: true }
});

module.exports = mongoose.model("Products", productSchema);
