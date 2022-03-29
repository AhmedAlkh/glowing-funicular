const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post");

//creating a post route
router.post('/createpost',requireLogin,(req,res)=>{
    //deconstruct the request to an object
    const {title,body,pic} = req.body
    
    if(!title || !body || !pic) {
        console.log(title,body, pic);
       return res.status(422).json({err:"you must include a title,body and pic"})
    }
    //console.log(req.body)
    //res.send("ok")
    //if there is enough data, create the post, but ensure the password does not pass through
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })

    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err => {
        console.log(err)
    })
})

//get all posts
router.get('/allposts',requireLogin,(req,res)=>{
    //findMany
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err);
    })
})

//list all the posts created by a single user for profile page
router.get('/myposts',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy", "_id name")
    .then(myposts => {
        res.json({myposts})
    })
    .catch(err=>{
        console.log(err)
    })
})

//like post
router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

//unlike post
router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

//comment on post
router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})




module.exports = router;