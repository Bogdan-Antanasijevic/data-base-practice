const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');
const User = require('./models/userModel');

const app = express();
app.listen(4003,err=>{
    if(err){
        console.log(err);
    }
    else{
    console.log(`Server is running on port 4003`);
    }
});

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
app.post('/api/login', (req,res)=>{
	const reqBody = req.body;
    const foundUser = User.findOne(reqBody,(err,data)=>{
        if(err){
            const errorMsg = `Error on getting user from DB: ${err}`
            console.log(errorMsg);
            res.send(errorMsg);
        }
        else{
            res.send(data);
        }
    })
});

mongoose.connect(dbConfig.MONGODB_URL)
    .then(data => console.log('MONGO DB IS connected'))
    .catch(err => console.log(`Error while connecting to MONGO DB:${err} `));