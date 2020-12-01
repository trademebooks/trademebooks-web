const passport = require('passport')

const User = require('../../domain/models/user.model')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

require('./google.config')
// require('./facebook.config')
// require('./twitter.config')
// require('./github.config')
// require('./linkedin.config')
