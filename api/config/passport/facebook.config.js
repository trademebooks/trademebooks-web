const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const config = require('../../config')

// http://www.passportjs.org/packages/passport-facebook/

const facebookStrategyConfig = {
  clientID: config.FACEBOOK.clientID,
  clientSecret: config.FACEBOOK.clientSecret,
  callbackURL: '/api/v1/passport/auth/facebook/callback',
  proxy: true
}

const facebookStrategyLogin = async (accessToken, refreshToken, profile, cb) => {
  console.log(JSON.stringify(profile, null, '\t'));
  user = { ...profile };
  return cb(null, profile);
}

const facebookStrategy = new FacebookStrategy(facebookStrategyConfig, facebookStrategyLogin)

passport.use(facebookStrategy)