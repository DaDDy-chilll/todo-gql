const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String, 
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    verfied:{
        type:Boolean,
        default:false
    } 
})

module.exports = new mongoose.model('User',userSchema);

