const express = require("express");
const bodyParser =require('body-parser')
const mongoose = require("mongoose")
const cors = require('cors');
const app = express();

const  postsRoutes = require('./routes/posts');

mongoose.connect("mongodb+srv://post:sadique@123@cluster0-l08tx.mongodb.net/angular?retryWrites=true&w=majority",{ useNewUrlParser: true }).then(() =>{
    console.log("connected to the database");
}).catch(()=>{
    console.log("you have an issues in connection ")
})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin','X-Requested-With','Content-Type','Accept');
    res.setHeader('Access-Control-Allow-Methods',"GET","POST","PUT","PATCH","DELETE","OPTIONS");
    next();
})

app.use("/api/post",postsRoutes);
module.exports = app;