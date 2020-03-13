const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    facebookId: {type: String, default: null},
    googleId: {type: String, default: null},
    twitterId: {type: String, default: null},
    email: {type: String, default: null},
    password: {type: String, default: null},
    name: {type: String, default: null},
    picture: {type: String, default: null},
    profileName: {type: String, default: null},
    bookstoreName: {type: String, default: null},
});

mongoose.model('user', UserSchema);
