const mongoose = require('mongoose')
const User = require('./User')

const HelpRequestNorth = new mongoose.Schema({
    studentName:{
        type: String,
        default: User.displayName,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateSubmitted:{
        type: Date,
        default: Date.now,
        required: true
    },
    googleId:{
        type: String,
        default: User.googleId,
        required: true
    },
    requestType:{
        type: String,
        enum: ['Help', 'Grade'],
        required: true
    },
    isGradeRequest:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('HelpRequestNorth', HelpRequestNorth)