const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique:true
    },
    redirectUrl: {
        type:String,
        required: true
    },
    visitHistory:[
        {timestamp : {type:Number}}
    ],      
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // value will be a MongoDB ObjectId
        ref: "users", //It tells Mongoose: “This ObjectId belongs to a user document”
    }
},
  {timestamps: true}

)
const URL = mongoose.model('url', urlschema);
module.exports = URL;
