const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const config = require('../../config')
const passportController = require('../../controllers/passport.controller')

const facebookStrategyConfig = {
  clientID: config.FACEBOOK.clientID,
  clientSecret: config.FACEBOOK.clientSecret,
  callbackURL: '/api/v1/passport/auth/facebook/callback',
  profileFields: ['id', 'emails', 'name'],
  proxy: true
}

const facebookStrategyLogin = async (accessToken, refreshToken, profile, done) => {
  passportController.authenticateFacebook(accessToken, refreshToken, profile, done)
}

const facebookStrategy = new FacebookStrategy(
  facebookStrategyConfig,
  facebookStrategyLogin
)

passport.use(facebookStrategy)
