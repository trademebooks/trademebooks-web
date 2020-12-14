const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy

const config = require('../../config')

const githubStrategyConfig = {
  clientID: config.GITHUB.clientID,
  clientSecret: config.GITHUB.clientSecret,
  callbackURL: '/api/v1/passport/auth/github/callback',
  proxy: true
}

const githubStrategyLogin = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log(JSON.stringify(profile, null, '\t'))

  return done(null, profile)
}

const githubStrategy = new GithubStrategy(
  githubStrategyConfig,
  githubStrategyLogin
)

passport.use(githubStrategy)
