const express = require('express')
const router = express.Router()

const authRoutes = require('./auth.route')
const accountRoutes = require('./account.route')
const bookRoutes = require('./book.route')
const bookstoreRoutes = require('./bookstore.route')
const messageRoutes = require('./message.route')

const appRoutes = require('./app.route')
const utilityRoutes = require('./utilities.route')
const passportRoutes = require('./passport.route')

function getRouter() {
  router.use('/auth', authRoutes)
  router.use('/account', accountRoutes)
  router.use('/books', bookRoutes)
  router.use('/bookstores', bookstoreRoutes)
  router.use('/messages', messageRoutes)

  router.use('/app', appRoutes)
  router.use('/utilities', utilityRoutes)

  router.use('/passport', passportRoutes)

  return router
}

module.exports = getRouter
