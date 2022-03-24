//require express//
const express = require('express')
//invoke express//
const app = express()
const PORT = 5000

//creating middleware//
const customMiddleware = (req,res,next)=>{
    console.log("middleware executed!")
    //to execute the code further//
    next()
}


//get route//
app.get('/',(req,res)=>{
    console.log("home")
res.send("hello world")
})

app.get('/about',customMiddleware,(req,res)=>{
    console.log("about")
res.send("about page")
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})