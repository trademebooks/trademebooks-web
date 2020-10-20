const mongoose = require('mongoose')
const { Schema } = mongoose

const PasswordSchema = Schema({
  userId: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  tokenExpiresAt: {
    type: Date,
    default: new Date(+new Date() + 24 * 60 * 60 * 1000) // add 24 hours to current date
  },
  alreadyReset: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('password', PasswordSchema)
