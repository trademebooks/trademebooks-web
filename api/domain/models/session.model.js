const mongoose = require('mongoose')
const { Schema } = mongoose

const SessionSchema = new Schema({
  expires: {
    type: Date
  },
  session: {
    type: String
  }
})

module.exports = mongoose.model('session', SessionSchema)
