const env = process.env.NODE_ENV || 'development'
let config

if (env === 'development') {
  config = require('./dev')
} else if (env === 'testing') {
  config = require('./testing')
} else if (env === 'ci') {
  config = require('./ci')
} else if (env === 'production') {
  config = require('./production')
}

module.exports = config
