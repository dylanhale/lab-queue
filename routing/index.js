const express = require('express')
const router = express.Router()
const { ensureAuth, ensureUser, ensureAdmin, ensureTa } = require('../mw/auth')
const Queue = require('../models/Queue')
const HelpRequestNorth = require('../models/HelpRequestNorth')
const GradeScheme = require('../models/Grades')
const HelpRequestSouth = require('../models/HelpRequestSouth')
const TAGradersSchema = require('../models/TAGraders')

//Login Page
//route GET /
router.get('/', ensureUser, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//Admin Page with Admin Check Protection
//route GET /admin
router.get('/admin', ensureAdmin, async (req, res) => {
    try {
        const admin = await Queue.find({ user: req.user.admin }).lean()
        const taNames = await TAGradersSchema.find({}).lean()
        res.render('Admin', {
            name: req.user.firstName,
            mod: req.user.admin,
            taNames,
            admin
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//North Lab Queue
//route GET /NorthQueue
router.get('/NorthQueue', ensureAuth, async (req, res) => {
    try {
        const helpRequests = await HelpRequestNorth.find({ user: req.userId }).lean()
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const taNames = await TAGradersSchema.find({}).lean()
        res.render('NorthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest,
            isTA: req.user.isTA,
            isAdmin: req.user.isAdmin,
            taNames, 
            grades,
            helpRequests
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//South Lab Queue
//route GET /SouthQueue
router.get('/SouthQueue', ensureAuth, async (req, res) => {
    try {
        const helpRequests = await HelpRequestSouth.find({ user: req.userId }).lean()
        const Numgrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const taNames = await TAGradersSchema.find({}).lean()
        res.render('SouthQueue', {
            name: req.user.firstName,
            fullName: req.user.displayName,
            userImage: req.user.image,
            googleId: req.user.googleId,
            isGradeRequest: req.isGradeRequest,
            isTA: req.user.isTA,
            isAdmin: req.user.isAdmin,
            taNames,
            Numgrades,
            helpRequests
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//Add North Queue Help Request
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

//Delete North Queue Help Request
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

//Add South Queue Help Request
//route POST /SouthQueue
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

//Delete South Queue Help Request
//route DELETE /HelpRequestSouth
router.delete('/HelpRequestSouth/:id', ensureAuth, async (req, res) => {
    try {
        await HelpRequestSouth.remove({_id: req.params.id })
        res.redirect('/SouthQueue')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

//Post Grade from Adler North and Delete Request
//route POST /grades
router.post('/Grades/North', ensureTa, async (req, res) => {
    try {
        await GradeScheme.create(req.body)
        await HelpRequestNorth.deleteOne({userId: req.id })
        res.redirect('/NorthQueue')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
})

//Post Grade from Adler South and Delete Request
//route POST /grades
router.post('/Grades/South', ensureTa, async (req, res) => {
    try {
        await GradeScheme.create(req.body)
        await HelpRequestSouth.deleteOne({userId: req.id })
        res.redirect('/SouthQueue')
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

router.delete('/admin/:id', ensureAuth, async (req, res) => {
    try {
        await TAGradersSchema.remove({_id: req.params.id })
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

router.post('/admin', ensureAdmin, async (req, res) => {
    try {
        await TAGradersSchema.create(req.body)
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    } 
})


module.exports = router