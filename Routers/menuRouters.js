const express = require('express')
const MenuItem = require('../models/MenuItem')
 
const menuRouter  = express.Router()


menuRouter.post("/",async (req,res) =>{
    try {
        console.log("request",req);
        const data = req.body //Accesing the request body containing the Menu data

        //Create a new Menu Model user Mongoose Model
        const newMenu = new MenuItem(data)

        const response = await newMenu.save()

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
    }
})

menuRouter.get("/",async (req,res) =>{
    try {
        const data =  await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
        
    }

})


module.exports = menuRouter;