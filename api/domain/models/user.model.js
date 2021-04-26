const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false,
    unique: true,
    set: (username) => {
      // deletes all the white spaces in the username
      return username.toString().trim().replace(/\s+/gi, '')
    }
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  google_id: {
    type: String,
    required: false
  },
  facebook_id: {
    type: String,
    required: false
  },
  twitter_id: {
    type: String,
    required: false
  },
  github_id: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)
