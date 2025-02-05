const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        require: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }
})


//Create a persons Model 

const Person = mongoose.model("Person", personSchema)
module.exports = Person 