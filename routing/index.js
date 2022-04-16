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

// Dashboard
// route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
        const queue = await Queue.find({ user: req.user.id }).lean()
        res.render('Dashboard', {
            name: req.user.firstName,
            queue
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
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
        const queue = await Queue.find({ user: req.user.id }).lean()
        const helpRequests = await HelpRequestNorth.find({ user: req.userId }).lean()
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        res.render('NorthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest, 
            queue,
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
        const queue = await Queue.find({ user: req.user.id }).lean()
        const helpRequests = await HelpRequestSouth.find({ user: req.userId }).lean()
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        res.render('SouthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest, 
            queue,
            grades,
            helpRequests
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

router.get('/gradePortal', ensureTa, async (req, res) => {
    try {
        const ta = await Queue.find({ user: req.user.admin }).lean()
        res.render('gradePortal', {
            name: req.user.firstName,
            ta
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

// Process Help Request Add Form
// route POST /NorthQueue
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

//Process Delete for Help Request
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
        req.body.user = req.user.id
        await GradeScheme.create(req.body)
        await HelpRequestNorth.deleteOne({_id: req.id })
        res.redirect('/NorthQueue')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
})

module.exports = router