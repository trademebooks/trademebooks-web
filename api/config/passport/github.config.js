const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy

const config = require('../../config')
const passportController = require('../../controllers/passport.controller')

const githubStrategyConfig = {
  clientID: config.GITHUB.clientID,
  clientSecret: config.GITHUB.clientSecret,
  callbackURL: '/api/v1/passport/auth/github/callback',
  proxy: true
}

const githubStrategyLogin = (accessToken, refreshToken, profile, done) => {
  passportController.authenticateGithub(
    accessToken,
    refreshToken,
    profile,
    done
  )
}

const githubStrategy = new GithubStrategy(
  githubStrategyConfig,
  githubStrategyLogin
)

passport.use(githubStrategy)
