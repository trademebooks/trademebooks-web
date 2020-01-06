const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    facebookId: String,
    googleId: String,
    twitterId: String,
    email: String,
    password: String,
    name: String,
    picture: String,
    profileName: String,
    bookstoreName: String,
});

mongoose.model('user', userSchema);
