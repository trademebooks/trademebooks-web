const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy

const config = require('../../config')

const githubStrategyConfig = {
  clientID: config.GITHUB.clientID,
  clientSecret: config.GITHUB.clientSecret,
  callbackURL: '/api/v1/passport/auth/github/callback',
  proxy: true
}

const githubStrategyLogin = async (accessToken, refreshToken, profile, cb) => {
  console.log(JSON.stringify(profile, null, '\t'));
  user = { ...profile };
  return cb(null, profile);
}

const githubStrategy = new GithubStrategy(githubStrategyConfig, githubStrategyLogin)

passport.use(githubStrategy)