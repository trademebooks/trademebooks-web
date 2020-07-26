const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const bookRoutes = require('./book.route');
const appRoutes = require('./app.route');

function getRouter() {
  router.use('/auth', authRoutes);
  router.use('/books', bookRoutes);
  router.use('/app', appRoutes);

  return router;
}

module.exports = getRouter;
