const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const config = require('../../config')
const User = require('../../domain/models/user.model')

/*
{
  sub: '123'
  name: 'Yichen Zhu',
  given_name: 'Yichen',
  family_name: 'Zhu',
  picture: 'https://lh3.googleusercontent.com/-Y0wV1lZ8eno/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmXEVJckXyw8RWTd5SZoFWJ5JwvDg/s96-c/photo.jpg',
  email: 'yichen@yichen.com',
  email_verified: true,
  locale: 'en'
}
*/

const googleStrategyConfig = {
  clientID: config.GOOGLE.clientID,
  clientSecret: config.GOOGLE.clientSecret,
  callbackURL: '/api/v1/passport/auth/google/callback',
  proxy: true
}

const googleStrategyLogin = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const profileJson = profile._json
  const { sub, email, given_name, family_name, picture } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to setting the session with that user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then create it inou
    const user = await new User({
      email,
      username: sub,
      first_name: given_name,
      last_name: family_name,
      google_id: sub
    }).save()

    done(null, user)
  } catch (err) {
    console.log('passport error', { err })
  }
}

const googleStrategy = new GoogleStrategy(
  googleStrategyConfig,
  googleStrategyLogin
)

passport.use(googleStrategy)
