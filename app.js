const path = require('path')
const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override')
dotenv.config({ path: './config/config.env'})
require('./config/passport')(passport)

//Modified from tutorial located at https://morioh.com/p/67cdf462489c

//Connect to Database
dbConnect()

//Express Init
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//Method Override Function to ensure a DELETE submits
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

//Dev Mode Logging
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Handlebar Setup
const { formatDate, ifEmptyOrWhitespace } = require('./helpers/hbs')

app.engine(
  '.hbs', 
  exphbs.engine({ 
    helpers: {
      formatDate,
      ifEmptyOrWhitespace
    }, 
    defaultLayout: 'main', 
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

//Sessions to keep user logged in after closing site
app.use(session({
  secret: 'piano dog',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//Passport Init
app.use(passport.initialize())
app.use(passport.session())

//Global User Variable
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

//Site Routes
app.use('/', require('./routing/index'))
app.use('/auth', require('./routing/auth'))
app.use('/gradePortal', require('./routing/gradeLookup'))

//Set PORT Number
const PORT = process.env.PORT || 3000

//Listener for Logging purposes
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
})