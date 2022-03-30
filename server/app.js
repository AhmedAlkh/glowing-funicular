const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const {MONGOURI} = require('./config/keys');

//require the user Models
require('./models/user');
app.use(express.json())
//use/require the authenticate route
app.use(require('./routes/auth'))


//connect to the mongoDB
mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=> {
    console.log("connected to the MongoDB");
})
mongoose.connection.on('error', ()=>{
    console.log('Error logging on to MongoDB');
})

//require the Models after the connection is made
require('./models/user');
require('./models/posts');

app.use(express.json())
//use/require the authenticate route
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})