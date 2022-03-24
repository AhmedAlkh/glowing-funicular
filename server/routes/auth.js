// Require express//
const express = require('express')
// To use router from a seperate file//
const router = express.Router()
// Require mongoose //
const mongoose = require('mongoose')
// User model//
const User = mongoose.model("User")

// To creare routes//
router.get('/',(req,res)=>{
    res.send("hello")
})

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
   .catch(err=>{
    console.log(err) 
   })
})

//To export//
module.exports = router