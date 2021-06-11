const Conversation = require('../../../domain/models/chat/conversation.model')

const { ObjectId } = require('mongodb')

const conversations = [
  // Yichen chats with Cedric
  {
    _id: '5fc36879a0d3010d607eaade',
    recipients: [
      ObjectId('5e11e9d8eded1d23742c1c6a'),
      ObjectId('5e11e9d8eded1d23742c1c6b')
    ], // Yichen's user id, Cedric's user id
    lastestMessage: "Sure let's do it!",
    usersWhoHaveReadLastestMessage: [
      '5e11e9d8eded1d23742c1c6a' // This indicates that userId 5e11e9d8eded1d23742c1c6a (Yichen) was the last to have sent this message because one can't send a message without it being read first.
    ]
  },
  // Yichen chats with Wesley
  {
    _id: '5fc40064c17e1f1e88dc806d',
    recipients: [
      ObjectId('5e11e9d8eded1d23742c1c6a'),
      ObjectId('5e11e9d8eded1d23742c1c6c')
    ], // Yichen's user id, Wesley's user id
    lastestMessage: '',
    usersWhoHaveReadLastestMessage: [
      '5e11e9d8eded1d23742c1c6c' // This indicates that userId 5e11e9d8eded1d23742c1c6c (Wesley) was the last to have sent this message because one can't send a message without it being read first.
    ]
  }
]

module.exports = async () => {
  console.log('conversations.seeds...')

  for (const conversation of conversations) {
    await new Conversation(conversation).save()
  }
}
