const mongoose = require('mongoose');
const config = require('../config');

const db = async (url = config.mongoURI, opts = {}) => {
  try {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    let connection = mongoose.connect(url, { ...opts, useNewUrlParser: true })

    if (connection) {
      console.log('MongoDB Connected...');
      return connection;
    }
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = db;
