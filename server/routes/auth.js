// Require express//
const express = require('express')
// To use router from a seperate file//
const router = express.Router()

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
    res.json({message: "Information was posted"})
})

//To export//
module.exports = router