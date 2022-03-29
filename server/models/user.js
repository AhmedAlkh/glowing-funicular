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
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBad_Luck_Brian&psig=AOvVaw2JFP2OUtexYxQYbAVPuyj0&ust=1648608770349000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPijtbSo6vYCFQAAAAAdAAAAABAD"
    },

    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

//give the model a name, and pass through the schema 
mongoose.model("User", userSchema)