//require express//
const express = require('express')
//invoke express//
const app = express()
const PORT = 5000


//get route//
app.get('/',(req,res)=>{
res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})