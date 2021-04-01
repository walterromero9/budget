const mongoose = require('mongoose')

const movementSchema = mongoose.Schema({
    concept: String,
    amount: Number,
    date: String,
    type: String,
    userId: String,
    
})

const Movements = mongoose.model('Movements',movementSchema)

module.exports = Movements
