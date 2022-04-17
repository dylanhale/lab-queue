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

//Passport config
dotenv.config({ path: './config/config.env'})
require('./config/passport')(passport)

//Connect to Database
dbConnect()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//Method Override
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

//Logging in Dev Mode
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Handlebars Helpers
const { formatDate, select, deleteRequest } = require('./helpers/hbs')

//Handlebars
app.engine(
  '.hbs', 
  exphbs.engine({ 
    helpers: {
      formatDate,
      select,
      deleteRequest
    }, 
    defaultLayout: 'main', 
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

//Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

//Routing
app.use('/', require('./routing/index'))
app.use('/auth', require('./routing/auth'))


const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)