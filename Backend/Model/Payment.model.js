const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    payment_firstName: { type: String, required: true },
    payment_lastName: { type: String, required: true },
    payment_conNo:{ type: String, required: true },
    payment_Address1:{ type: String, required: true },
    payment_Address2:{ type: String, required: true },
    payment_City:{ type: String, required: true },
    payment_CardName:{ type: String, required: true },
    payment_CardNumber:{ type: String, required: true },
    payment_CardExp:{ type: String, required: true },
    payment_CardCvv:{ type: String, required: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
