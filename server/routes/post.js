// Require express//
const express = require('express')
// To use router from a seperate file//
const router = express.Router()
// Require mongoose //
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")




// to show all the posts//
router.get('allpost',(req,res)=>{
    Post.find()
    // to show the user info //
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body} = req.body
    if(!title || !body){
        return res.status(422).json({error:"Please add all the information required"})
    }
    // We are not storing the password//
    req.user.password = undefined

    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router