//require express//
const express = require('express')
//invoke express//
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')


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

require('./models/user')
require('./models/post')


app.use(express.json())
//Register a router//
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})