module.exports = {
    //Ensures user is authenticated, if not logged in then redirect to login page
    ensureAuth: function (req, res, next) {
        if(req.isAuthenticated()){
            return next()
        }
        else{
            res.redirect('/')
        }
    },

    //Ensures user is logged in
    ensureUser: function (req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('/NorthQueue')
        }
        else{
            return next()
        }
    },

    //Checks if a user is an Admin
    ensureAdmin: function (req, res, next){
        if(req.user.isAdmin){
            return next()
        }
        else{
            res.redirect('/NorthQueue')
        }
    },

    //Checks if a user is a TA
    ensureTa: function (req, res, next){
        if(req.user.isTA || req.user.isAdmin){
            return next()
        }
        else{
            res.redirect('/NorthQueue')
        }
    }
}