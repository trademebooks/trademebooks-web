const config = require('../../config');

const mongoose = require('mongoose');

const db = (url = config.mongoURI, opts = {}) => {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
  return mongoose.connect(url, { ...opts, useNewUrlParser: true })
}

module.exports = db;
