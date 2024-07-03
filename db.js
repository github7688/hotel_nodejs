const mongoose = require('mongoose')
require("dotenv").config()

//Define the MongoDB URl

const mongoUrl =  process.env.DB_URL  
// const mongoUrl =  "mongodb://localhost:27017/hotels"


//Establish the mongoDb connection

mongoose.connect(mongoUrl)

// Get th default connection 
// Mongoose manage a default connection Object  representing the  MongoDb connection
const db = mongoose.connection;

//Event Listener

db.on("connected",()=>{
    console.log("Conneced to the mongodb server");
})

db.on("error",(err)=>{
    console.log("MongoDb connection err",err);
})

db.on("disconnected",()=>{
    console.log("MongoDb disconnected");
})

module.exports = db

