const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const config = require('../../config')
const passportController = require('../../controllers/passport.controller')

const googleStrategyConfig = {
  clientID: config.GOOGLE.clientID,
  clientSecret: config.GOOGLE.clientSecret,
  callbackURL: '/api/v1/passport/auth/google/callback',
  proxy: true
}

const googleStrategyLogin = (accessToken, refreshToken, profile, done) => {
  passportController.authenticateGoogle(
    accessToken,
    refreshToken,
    profile,
    done
  )
}

const googleStrategy = new GoogleStrategy(
  googleStrategyConfig,
  googleStrategyLogin
)

passport.use(googleStrategy)
