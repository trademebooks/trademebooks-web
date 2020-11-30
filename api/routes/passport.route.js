const express = require('express')
const router = express.Router()
const config = require('../config')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../domain/models/user.model')

const googleStrategyLogin = async (accessToken, refreshToken, profile, done) => {
  // {
  //   profile._json: {
  //     sub: '110603409234402153901',
  //     name: 'Yichen Zhu',
  //     given_name: 'Yichen',
  //     family_name: 'Zhu',
  //     picture: 'https://lh3.googleusercontent.com/-Y0wV1lZ8eno/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmXEVJckXyw8RWTd5SZoFWJ5JwvDg/s96-c/photo.jpg',
  //     email: 'yichenzhu1337@gmail.com',
  //     email_verified: true,
  //     locale: 'en'
  //   }
  // }
  const profileJson = profile._json
  const { sub, email } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to setting the session with that user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then create it inou
    const user = await new User({
      googleId: sub,
      username: sub
    }).save()

    done(null, user)
  } catch (err) {
    console.log('passport error', { err })
  }
}

const googleStrategyConfig = {
  clientID: config.googleClientID,
  clientSecret: config.googleClientSecret,
  callbackURL: '/api/v1/passport/auth/google/callback',
  proxy: true
}

const googleStrategy = new GoogleStrategy(googleStrategyConfig, googleStrategyLogin)

passport.use(googleStrategy)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    console.log('Successful authentication, redirect home.')
    res.redirect('/')
  }
)

module.exports = router
