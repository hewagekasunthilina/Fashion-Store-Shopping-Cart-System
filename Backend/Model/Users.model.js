const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    //sign_up_img : {data: Buffer, type: Buffer, contentType: String},
    sign_up_Name : {type:String , required:true},
    sign_up_NIC : {type: String, required: true, unique: true},
    sign_up_Mobile : {type: String, required: true, unique: true},
    sign_up_Address : {type: String, required: true},
    sign_in_Email1 : {type: String, required: true, unique: true},
    sign_upPassword : {type: String, required: true},
    user_type : {type:String},
    date : {type: Date, default: Date.now()},


});

module.exports = mongoose.model("Users", usersSchema);
