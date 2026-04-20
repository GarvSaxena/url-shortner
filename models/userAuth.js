// THis will be a mongodb collection for authorisation
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
    }
}, {timestamps:true});

const User = mongoose.model('user', userSchema)
module.exports = User;