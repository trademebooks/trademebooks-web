let config = require('./dev');

if (process.env.NODE_ENV === 'testing') {
  config = require('./testing');
}
else if (process.env.NODE_ENV === 'production') {
  config = require('./production');
}

module.exports = config;