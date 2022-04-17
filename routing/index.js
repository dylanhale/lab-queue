const express = require('express')
const router = express.Router()
const { ensureAuth, ensureUser, ensureAdmin, ensureTa } = require('../mw/auth')
const Queue = require('../models/Queue')
const HelpRequestNorth = require('../models/HelpRequestNorth')
const GradeScheme = require('../models/Grades')
const HelpRequestSouth = require('../models/HelpRequestSouth')

// Login/Landing Page
// route GET /
router.get('/', ensureUser, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

router.get('/admin', ensureAdmin, async (req, res) => {
    try {
        const admin = await Queue.find({ user: req.user.admin }).lean()
        res.render('Admin', {
            name: req.user.firstName,
            mod: req.user.admin,
            admin
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/NorthQueue', ensureAuth, async (req, res) => {
    try {
        const helpRequests = await HelpRequestNorth.find({ user: req.userId }).lean()
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        res.render('NorthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest,
            isTA: req.user.isTA, 
            grades,
            helpRequests
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/SouthQueue', ensureAuth, async (req, res) => {
    try {
        const helpRequests = await HelpRequestSouth.find({ user: req.userId }).lean()
        const Numgrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        res.render('SouthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest,
            isTA: req.user.isTA,
            Numgrades,
            helpRequests
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/gradePortal', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: { $in: ['111', '112', '211'] }  }).sort({ dateSubmitted: 'asc' }).lean()
        res.render('gradePortal', { })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//Add Help Request
//route POST /NorthQueue
router.post('/HelpRequestNorth', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await HelpRequestNorth.create(req.body)
        res.redirect('/NorthQueue')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
 })

//Delete Help Request
//route DELETE /HelpRequestNorth
router.delete('/HelpRequestNorth/:id', ensureAuth, async (req, res) => {
    try {
        await HelpRequestNorth.remove({_id: req.params.id })
        res.redirect('/NorthQueue')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

router.post('/HelpRequestSouth', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await HelpRequestSouth.create(req.body)
        res.redirect('/SouthQueue')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
})

 router.delete('/HelpRequestSouth/:id', ensureAuth, async (req, res) => {
    try {
        await HelpRequestSouth.remove({_id: req.params.id })
        res.redirect('/SouthQueue')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

router.post('/Grades', ensureAuth, async (req, res) => {
    try {
        await GradeScheme.create(req.body)
        await HelpRequestNorth.deleteOne({userId: req.id })
        res.redirect('/NorthQueue')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
})



//Routes for searching in the Grade Portal
//Cannot get param to pass from gradePortal so each search requires their own route
router.get('/gradePortal/111', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '111' }).lean()
        res.render('gradePortal', {
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/gradePortal/112', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '112' }).lean()
        res.render('gradePortal', {
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/gradePortal/211', ensureTa, async (req, res) => {
    try {
        const grades = await GradeScheme.find({ courseNumber: '211' }).lean()
        res.render('gradePortal', {
            grades
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//Delete All Recorded Grades
//route DELETE /grades
router.delete('/grades', ensureAdmin, async (req, res) => {
    try {
        await GradeScheme.deleteMany({})
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

//Delete All North Help Requests
//route DELETE /HelpRequestNorth
router.delete('/HelpRequestNorth', ensureAdmin, async (req, res) => {
    try {
        await HelpRequestNorth.deleteMany({})
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

//Delete All North South Requests
//route DELETE /HelpRequestSouth
router.delete('/HelpRequestSouth', ensureAdmin, async (req, res) => {
    try {
        await HelpRequestSouth.deleteMany({})
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})


module.exports = router