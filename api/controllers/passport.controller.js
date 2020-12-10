const catchExceptions = require('../utils/catchExceptions')
const authService = require('../domain/services/auth.service')

const User = require('../domain/models/user.model')

const authenticateGoogle = async (accessToken, refreshToken, profile, done) => {
  const profileJson = profile._json
  const { sub, email, given_name, family_name, picture } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to logging that user in
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then register the user
    const newUser = {
      email,
      username: sub,
      first_name: given_name,
      last_name: family_name,
      google_id: sub,
      password: Math.random().toString(36).substring(0)
    }

    const user = await authService.registerUser(newUser)

    return done(null, user.createdUser)
  } catch (err) {
    console.log('passport google error', { err })
  }
}

const authenticateFacebook = async (accessToken, refreshToken, profile, done) => {
  const profileJson = profile._json
  const { id, email, last_name, first_name } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to logging that user in
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then register the user
    const newUser = {
      email,
      username: id,
      first_name,
      last_name,
      facebook_id: id,
      password: Math.random().toString(36).substring(0)
    }

    const user = await authService.registerUser(newUser)

    return done(null, user.createdUser)
  } catch (err) {
    console.log('passport facebook error', { err })
  }
}

const authenticateTwitter = async (accessToken, refreshToken, profile, done) => {
  const profileJson = profile._json
  const { id, email, name, screen_name, location, profile_image_url_https } = profileJson

  const [first_name, last_name] = name.split(' ')

  try {
    // scenario 1: if the user is already in our database, then proceed to logging that user in
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then register the user
    const newUser = {
      email,
      username: screen_name,
      first_name,
      last_name,
      twitter_id: id,
      password: Math.random().toString(36).substring(0)
    }

    const user = await authService.registerUser(newUser)

    return done(null, user.createdUser)
  } catch (err) {
    console.log('passport facebook error', { err })
  }
}

module.exports = {
  authenticateGoogle,
  authenticateFacebook,
  authenticateTwitter
}
