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
    unique: true
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
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)
