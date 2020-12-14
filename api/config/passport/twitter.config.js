const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

const config = require('../../config')
const passportController = require('../../controllers/passport.controller')

const twitterStrategyConfig = {
  consumerKey: config.TWITTER.clientID,
  consumerSecret: config.TWITTER.clientSecret,
  callbackURL: '/api/v1/passport/auth/twitter/callback',
  includeEmail: true,
  proxy: true
}

const twitterStrategyLogin = async (token, tokenSecret, profile, done) => {
  passportController.authenticateTwitter(token, tokenSecret, profile, done)
}

const twitterStrategy = new TwitterStrategy(
  twitterStrategyConfig,
  twitterStrategyLogin
)

passport.use(twitterStrategy)
