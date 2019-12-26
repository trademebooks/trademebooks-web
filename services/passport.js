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
        callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
/*                User.findOrCreate({ googleId: profile.id }, function (err, user) {
                    return cb(err, user);
                });*/
/*                console.log("accessToken:", accessToken);
                console.log("refreshToken:", refreshToken);
                console.log("profile:", profile);
                console.log("cb:", done);*/

        const existingUser = await User.findOne({googleId: profile.id});

        console.log("existing user:", existingUser);

        if (existingUser) { // we already have a record of the given profile id
            done(null, existingUser);
        }
        else {
            const user = await new User({googleId: profile.id}).save();

            console.log("user:", user);

            done(null, user);
        }
    }
));