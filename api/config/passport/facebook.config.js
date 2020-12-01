const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const config = require('../../config')
const User = require('../domain/models/user.model')
// http://www.passportjs.org/packages/passport-facebook/

/*
{
  "id": "2646566148737062",
  "displayName": "Yi Chen Zhu",
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
  const { id, displayName } = profileJson

  console.log(JSON.stringify(profileJson, null, '\t'))

  const email = profileJson.email[0].value

  try {
    // scenario 1: if the user is already in our database, then proceed to setting the session with that user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then create it inou
    const user = await new User({
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
