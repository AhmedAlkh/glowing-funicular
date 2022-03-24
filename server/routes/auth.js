// Require express//
const express = require('express')
// To use router from a seperate file//
const router = express.Router()
// Require mongoose //
const mongoose = require('mongoose')
// User model//
const User = mongoose.model("User")
// Require bcrypt//
const bcrypt = require('bcryptjs') 



//Sign up router//
router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    // Checking if the mandatory fileds are empty - error//
    if(!email || !password || !name){
return res.status(422).json({error:"Information is missing"})
    }
   // To use user model //
   User.findOne({email:email})
   .then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"User already exists with this email"})    
    } 

    // Not to show password//
    bcrypt.hash(password,12)
    .then(hashedpassword=>{
        const user = new User({
        email,
        password,
        name
    })
    user.save()
    .then(user=>{
     res.json({message: "Successfully saved"})   
    })
    .catch(err=>{
        console.log(err)
    })

    })
      
   })
   .catch(err=>{
    console.log(err) 
   })
})


//Signin route//
router.post('/signin',(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"Email or password is required"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
if(!savedUser){
return res.status(422).json({error:"Invalid Email or Password"})
}
//To compare the password//
bcrypt.compare(password,savedUser.password)
.then(doMatch=>{
    if(doMatch){
        res.json({message:"You are signed in"})
    }
    else{
        return res.status(422).json({error:"Invalid Email or Password"})
    }
})
.catch(err=>{
    concole.log(err)
})
    })
})


//To export//
module.exports = router