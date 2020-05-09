const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    sign_up_Name : {type:String , required:true},
    sign_up_NIC : {type: String, required: true, unique: true},
    sign_in_Email1 : {type: String, required: true, unique: true},
    sign_upPassword : {type: String, required: true},
    sign_upPassword_confirm : {type: String, required: true}
});

module.exports = mongoose.model("Users", usersSchema);
