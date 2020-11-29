const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  messageBody: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('message', messageSchema)
