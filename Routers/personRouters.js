const express = require('express')
const Person = require('../models/person')
 
const personRouter  = express.Router()




personRouter.post("/person",async (req,res) =>{
    try {
        console.log("request",req);
        const data = req.body //Accesing the request body containing the person datd

        console.log("data",data)

        //Create a new person Model user Mongoose Model
        const newPerson = new Person(data)

        const response = await newPerson.save()
        console.log("Data Saved"); 

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
    }
})

personRouter.get("/person",async (req,res) =>{
    try {
        const data =  await Person.find();
        console.log('data fetched');
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
        
    }

})

personRouter.get("/person/:workType",async (req,res) =>{

    try {
        const workType = req.params.workType;
        console.log("workType",workType);
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType})
            res.status(200).json(response)

        }else{
            res.status(404).json({error: 'Invalid work Type'})

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
    }

})

personRouter.put('/person/:id',async(req,res) =>{
     try {
        const personId = req.params.id;
        const updatedPerson = req.body
        const response = await Person.findByIdAndUpdate(personId,updatedPerson,{
            new: true,
            runValidators: true
        })

        if(!response){
            res.status(404).json({error: "Person Not Found"})
        }

        console.log("data fetched")
        res.status(200).json(response)
        
     } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server Error"})
     }
})


personRouter.delete('/person/:id',async(req,res) =>{
    try {
       const personId = req.params.id;
    
       const response = await Person.findByIdAndDelete (personId)

       if(!response){
           res.status(404).json({error: "Person Not Found"})
       }

       console.log("data deleted")
       res.status(200).json({message: "Data deleted successfully"})
       
    } catch (error) {
       console.log(error)
       res.status(500).json({error: "Internal server Error"})
    }
})

module.exports = personRouter