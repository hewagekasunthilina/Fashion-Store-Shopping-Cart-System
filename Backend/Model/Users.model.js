/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({

    userName : {type:String , required:true},
    NIC : {type: String, required: true, unique: true},
    Mobile : {type: String, required: true, unique: true},
    Address : {type: String, required: true},
    Email : {type: String, required: true, unique: true},
    Password : {type: String, required: true},
    UserType : {type:String},
    RegisterDate : {type: Date, default: Date.now()},


});

module.exports = mongoose.model("Users", usersSchema);
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);
