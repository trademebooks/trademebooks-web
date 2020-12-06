const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

const config = require('../../config')
const User = require('../../domain/models/user.model')

/*
{
   profileJson: {
     id: 2518075502,
     id_str: '2518075502',
     name: 'Yichen Zhu',
     screen_name: 'yichenzhu1337',
     location: 'Canada',
     created_at: 'Fri May 23 15:21:42 +0000 2014',
     profile_image_url: 'http://pbs.twimg.com/profile_images/1229047678639706113/lsSk8mKl_normal.jpg',
     profile_image_url_https: 'https://pbs.twimg.com/profile_images/1229047678639706113/lsSk8mKl_normal.jpg',
     profile_banner_url: 'https://pbs.twimg.com/profile_banners/2518075502/1581862777',
     email": "yichenzhu1337@gmail.com
   }
 }
*/

const twitterStrategyConfig = {
  consumerKey: config.TWITTER.clientID,
  consumerSecret: config.TWITTER.clientSecret,
  callbackURL: '/api/v1/passport/auth/twitter/callback',
  includeEmail: true,
  proxy: true
}

const twitterStrategyLogin = async (token, tokenSecret, profile, done) => {
  const profileJson = profile._json
  const { id, email, name } = profileJson

  try {
    // scenario 1: if the user is already in our database, then proceed to setting the session with that user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return done(null, existingUser)
    }

    // scenario 2: if the user does not exist in the databaase, then create it inou
    const user = await new User({
      email,
      username: id,
      first_name: name,
      last_name: '',
      twitter_id: id
    }).save()

    done(null, user)
  } catch (err) {
    console.log('passport error', { err })
  }
}

const twitterStrategy = new TwitterStrategy(
  twitterStrategyConfig,
  twitterStrategyLogin
)

passport.use(twitterStrategy)
