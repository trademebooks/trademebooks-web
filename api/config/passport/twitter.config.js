const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

const config = require('../../config')

const twitterStrategyConfig = {
  consumerKey: config.TWITTER.clientID,
  consumerSecret: config.TWITTER.clientSecret,
  callbackURL: '/api/v1/passport/auth/twitter/callback',
  proxy: true
}

const twitterStrategyLogin = async (accessToken, refreshToken, profile, cb) => {
  console.log(JSON.stringify(profile, null, '\t'))
  user = { ...profile }
  return cb(null, profile)
}

const twitterStrategy = new TwitterStrategy(
  twitterStrategyConfig,
  twitterStrategyLogin
)

passport.use(twitterStrategy)
