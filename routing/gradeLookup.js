const express = require('express')
const router = express.Router()
const { ensureTa } = require('../mw/auth')
const GradeScheme = require('../models/Grades')

//Routes for searching in the Grade Portal
router.get('/', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({}).sort({ "dateSubmitted": -1, "studentName": -1 }).lean()
        res.render('classPortal/gradePortal', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 All Sections
router.get('/111', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 1
router.get('/111/1', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '1' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 2
router.get('/111/2', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '2' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 3
router.get('/111/3', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '3' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 4
router.get('/111/4', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '4' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 5
router.get('/111/5', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '5' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 6
router.get('/111/6', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '6' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 7
router.get('/111/7', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '7' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 111 Section 8
router.get('/111/8', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111', section: '8' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal111', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 All Sections
router.get('/112', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 1
router.get('/112/1', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '1' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 2
router.get('/112/2', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '2' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 3
router.get('/112/3', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '3' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 4
router.get('/112/4', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '4' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 5
router.get('/112/5', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '5' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 6
router.get('/112/6', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '6' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 7
router.get('/112/7', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '7' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 112 Section 8
router.get('/112/8', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112', section: '8' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal112', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 211 All Sections
router.get('/211', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211' }).sort({ dateSubmitted: -1, studentName: -1 }).lean()
        res.render('classPortal/gradePortal211', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 211 Section 1
router.get('/211/1', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211', section: '1' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal211', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 211 Section 2
router.get('/211/2', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211', section: '2' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal211', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 211 Section 3
router.get('/211/3', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211', section: '3' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal211', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//CSCI 211 Section 4
router.get('/211/4', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211', section: '4' }).sort({ dateSubmitted: 'desc' }).lean()
        res.render('classPortal/gradePortal211', {
            isAdmin: req.user.isAdmin, 
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})


module.exports = router