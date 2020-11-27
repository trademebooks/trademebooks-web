let env = process.env.NODE_ENV || 'development'
let config = undefined

if (env === 'testing') {
  config = require('./testing')
}
else if (env === 'production') {
  config = require('./production')
}
else {
  config = require('./dev')
}

module.exports = config
