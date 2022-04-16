const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
    _id: String,
    name: String,
    age: Number
})

module.exports = mongoose.model('TestScheme',TestSchema)