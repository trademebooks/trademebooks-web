const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.route');
const bookRoutes = require('./book.route');
const bookstoreRoutes = require('./bookstore.route');

const appRoutes = require('./app.route');
const utilityRoutes = require('./utilities.route');

function getRouter() {
  router.use('/auth', authRoutes);
  router.use('/books', bookRoutes);
  router.use('/bookstores', bookstoreRoutes);
  router.use('/app', appRoutes);
  router.use('/utilities', utilityRoutes);

  return router;
}

module.exports = getRouter;
