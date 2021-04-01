const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> console.log('DataBase Connected'))
.catch(error => console.log(error))