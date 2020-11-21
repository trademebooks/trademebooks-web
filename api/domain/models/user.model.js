const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: false
  },
  socketId: {
    type: String
  },
  nickname: { 
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)
