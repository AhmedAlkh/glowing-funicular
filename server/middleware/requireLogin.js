const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require ('mongoose')
// Access the User model //
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorizaton === Bearer whateveryouwant//
    if(!authorization){
        return res.status(401).json({error:"Need to loggin first"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"You need to login"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            // To continue to a next middleware//
        next()
    })
        
    })
}