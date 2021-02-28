const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    
})

const User = mongoose.model('user', userSchema)
module.exports = User