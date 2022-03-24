//require express//
const express = require('express')
//invoke express//
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')


require('./models/user')


//connect to a database//
mongoose.connect(MONGOURI,{
    useNewUrlParsel:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("connection error",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})