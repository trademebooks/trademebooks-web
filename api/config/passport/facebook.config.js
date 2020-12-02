const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const config = require('../../config')
const User = require('../../domain/models/user.model')

/*
{
  "id": "2646566148737062",
  "email": "yichenzhu1337@gmail.com",
  "last_name": "Zhu",
  "first_name": "Yi Chen"
}
*/

const facebookStrategyConfig = {
  clientID: config.FACEBOOK.clientID,
  clientSecret: config.FACEBOOK.clientSecret,
  callbackURL: '/api/v1/passport/auth/facebook/callback',
  profileFields: ['id', 'emails', 'name'],
  proxy: true
}

const facebookStrategyLogin = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const profileJson = profile._json
  const {
    id,
    email,
    last_name,
    first_name
  } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to setting the session with that user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the database, then create it inou
    const user = await new User({
      email,
      last_name,
      last_name,
      facebook_id: id,
      username: id
    }).save()

    done(null, user)
  } catch (err) {
    console.log('facebook - passport error', { err })
  }
}

const facebookStrategy = new FacebookStrategy(
  facebookStrategyConfig,
  facebookStrategyLogin
)

passport.use(facebookStrategy)
