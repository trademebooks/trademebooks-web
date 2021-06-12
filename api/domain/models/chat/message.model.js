const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: 'conversations'
    },
    fromUserId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    toUserId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    body: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('messages', MessageSchema)
