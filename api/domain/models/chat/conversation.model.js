const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationSchema = new Schema(
  {
    recipients: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    lastestMessage: {
      type: String
    },
    usersWhoHaveReadLastestMessage: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('conversations', ConversationSchema)
