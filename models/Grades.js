const mongoose = require('mongoose')
const User = require('./User')
const HelpRequestNorth = require('./HelpRequestNorth')

const GradeScheme = new mongoose.Schema({
    dateSubmitted:{
        type: Date,
        default: Date.now,
        required: true
    },
    studentName:{
        type: String,
        default: HelpRequestNorth.studentName,
        required: true
    },
    labGrade:{
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        required: true
    },
    taGrader:{
        type: String,
        enum: ["Dylan Hale", "Jeff Lucas", "Testing", "Testing2"],
        required: true
    },
    section:{
        type: Number,
        default: 1,
        enum: [1, 2, 3, 4, 5, 6],
        required: true
    },
    courseNumber:{
        type: Number,
        default: 111,
        enum: [111, 112, 211],
        required: true
    }
})

module.exports = mongoose.model('Grades', GradeScheme)