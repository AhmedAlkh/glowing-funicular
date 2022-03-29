const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    pic: {
        type: String,
        default: "https://en.wikipedia.org/wiki/Bad_Luck_Brian#/media/File:Bad_Luck_Brian.jpg"
    },

    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

//give the model a name, and pass through the schema 
mongoose.model("User", userSchema)