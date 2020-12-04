const express = require('express')
const router = express.Router()

const utilsRoutes = require('./utilities.route')
const authRoutes = require('./auth.route')
const passportRoutes = require('./passport.route')
const accountRoutes = require('./account.route')
const bookRoutes = require('./book.route')
const bookstoreRoutes = require('./bookstore.route')
const messageRoutes = require('./message.route')

const getRouter = () => {
  router.use('/utilities', utilsRoutes)
  router.use('/auth', authRoutes)
  router.use('/passport', passportRoutes)
  router.use('/account', accountRoutes)
  router.use('/books', bookRoutes)
  router.use('/bookstores', bookstoreRoutes)
  router.use('/messages', messageRoutes)

  return router
}

module.exports = getRouter
