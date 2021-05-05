const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationSchema = new Schema({
  recipients: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  lastMessage: {
    type: String
  },
  lastMessageIsRead: {
    type: Boolean,
    default: false
  },
  lastMessageSenderId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('conversations', ConversationSchema)
