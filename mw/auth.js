module.exports = {
    ensureAuth: function (req, res, next) {
        if(req.isAuthenticated()){
            return next()
        }
        else{
            res.redirect('/')
        }
    },

    ensureUser: function (req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('/NorthQueue')
        }
        else{
            return next()
        }
    },

    ensureAdmin: function (req, res, next){
        if(req.user.isAdmin){
            return next()
        }
        else{
            res.redirect('/NorthQueue')
        }
    },

    ensureTa: function (req, res, next){
        if(req.user.isTA || req.user.isAdmin){
            return next()
        }
        else{
            res.redirect('/NorthQueue')
        }
    }
}