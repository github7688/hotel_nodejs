const express = require("express")
const  app = express();
const db = require('../db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const personRouter = require("../Routers/personRouters")
const menuRouter = require("../Routers/menuRouters")

const Person = require("../models/person")
const MenuItem = require("../models/MenuItem")

const PORT = 3000;

app.get("/",(req,res) =>{
    res.send("Welcome to my Hotels")
})

app.use('/',personRouter)

app.use("/menuItem", menuRouter)


app.listen(PORT,() =>{
    console.log("Server is running on the port 3000");
})