const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        let google_user_details = profile._json;
        let googleId = profile.id;
        let name = google_user_details.name;
        let picture = google_user_details.picture;
        let email = google_user_details.email;

        const existingUser = await User.findOne({googleId: profile.id});

        if (existingUser) { // we already have a record of the given profile id
            console.log("existing user:", existingUser);
            
            done(null, existingUser);
        } else {
            const user = await new User({
                googleId,
                name,
                picture,
                email
            }).save();

            console.log("user:", user);

            done(null, user);
        }
    }
));

/**
 * SAMPLE OUTPUT FORM: async (accessToken, refreshToken, profile, done) => {
 *
 {
   id: '110603409234402153901',
   displayName: 'Yi Chen Zhu',
   name: { familyName: 'Zhu', givenName: 'Yi Chen' },
   emails: [ { value: 'yichenzhu1337@gmail.com', verified: true } ],
   photos: [
     {
       value: 'https://lh3.googleusercontent.com/-Y0wV1lZ8eno/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcklAbO227AZwxw1kMi4ZzWpoQ5-g/photo.j
pg'
     }
   ],
   provider: 'google',
   _json: {
     sub: '110603409234402153901',
     name: 'Yi Chen Zhu',
     given_name: 'Yi Chen',
     family_name: 'Zhu',
     picture: 'https://lh3.googleusercontent.com/-Y0wV1lZ8eno/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcklAbO227AZwxw1kMi4ZzWpoQ5-g/photo.j
pg',
     email: 'yichenzhu1337@gmail.com',
     email_verified: true,
     locale: 'en'
   }
 }
 */