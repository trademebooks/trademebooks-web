const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const passport = require('passport')

const config = require('./config')
const globalResponseDTO = require('./responses/globalResponseDTO')

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

// Passport Settings
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.confg')

const getRouter = require('./routes')
const router = getRouter()
app.use('/api/v1', router)

/**
 * SOCKETs for chat app
 */
const server = http.createServer(app)
const io = require('socket.io')(server)
io.use(function (socket, next) {
  sessionMiddleware(socket.request, socket.request.res || {}, next)
})
io.on('connection', (socket) => {
  require('./sockets/chat/privateMessage')(io, socket)
  require('./sockets/chat/joinPrivateRoom')(io, socket)
})

// Event listeners
require('./events')

// Global Exception Handler
app.use((err, req, res, next) => {
  // log it out into the conosle
  console.log('===============================')
  console.log('Global Error Catcher:', err.name)
  console.log('===============================')
  if (err.name === 'ApiException') {
    console.error('ApiException', err)

    return res
      .status(err.code)
      .json(
        globalResponseDTO(
          (status = err.status),
          (code = err.code),
          (message = err.message),
          (data = err.data),
          (errors = err.errors)
        )
      )
  } else if (err.name === 'MongoError') {
    console.error('MongoError', err)

    if (err.errmsg.includes('E11000 duplicate key error')) {
      return res
        .status(400)
        .json(
          globalResponseDTO(
            (status = 'failed'),
            (code = 400),
            (message = err.errmsg),
            (data = null),
            (errors = ['This email is already taken.'])
          )
        )
    }
  } else {
    console.error('Other Error', err)
  }
})

app.use(express.static('client/build'))
const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = server
