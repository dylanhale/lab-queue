const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

//Built from tutorial located at https://morioh.com/p/67cdf462489c

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, cb) => {
        const newUser ={
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
        }

        try {
            let user = await User.findOne({ googleId: profile.id})

            if(user){
                cb(null, user)
            }
            else{
                user = await User.create(newUser)
                cb(null, user)
            }
        } catch (error) {
            console.error(error)
        }
    }))

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        User.findById(id, (err, user) => {
            cb(err, user)
        })
    })
}