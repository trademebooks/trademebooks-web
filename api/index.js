const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const passport = require('passport')

const config = require('./config')
const globalExceptionHandler = require('../api/utils/globalExceptionHandler')

// force the use of HTTPS (in production only)
const sslRedirect = require('./utils/heroku-ssl-redirect')
app.use(sslRedirect())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

const sessionMiddleware = session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
  })
})
app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')

// socket.io - start
const server = http.createServer(app)
const io = require('socket.io').listen(server)
// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io
  next()
})
// socket.io - end

const getRouter = require('./routes')
const router = getRouter()
app.use('/api/v1', router)

require('./events')

app.use(globalExceptionHandler)

app.use(express.static('client/build'))
const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = server
