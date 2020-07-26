let config = require('./dev');

if (process.env.NODE_ENV === 'testing') {
  config = require('./testing');
}

module.exports = config;