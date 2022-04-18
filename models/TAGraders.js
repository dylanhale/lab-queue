const mongoose = require('mongoose')

const TAGradersSchema = new mongoose.Schema({
    taName:{
        type: String,
        required: true
    },
    dateAdded:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('TA Graders', TAGradersSchema)