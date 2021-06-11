const mongoose = require('mongoose')

const ConversationModel = require('../models/chat/conversation.model')
const MessageModel = require('../models/chat/message.model')

const getAllAuthConversations = async (authId) => {
  const from = mongoose.Types.ObjectId(authId)

  const conversations = await ConversationModel.aggregate([{
    $lookup: {
      from: 'users',
      localField: 'recipients',
      foreignField: '_id',
      as: 'recipientObj'
    }
  }]).match({ recipients: { $all: [{ $elemMatch: { $eq: from } }] } })
    .project({
      'recipientObj.password': 0,
      'recipientObj.__v': 0,
      'recipientObj.date': 0
    })
    .sort({ date: 'desc' })

  return conversations
}

const getConversationMessagesByUserId = async (authId, userId) => {
  const user1 = mongoose.Types.ObjectId(authId)
  const user2 = mongoose.Types.ObjectId(userId)

  const conversations = await MessageModel.aggregate([{
    $lookup: {
      from: 'users',
      localField: 'to',
      foreignField: '_id',
      as: 'toObj'
    }
  },
  {
    $lookup: {
      from: 'users',
      localField: 'from',
      foreignField: '_id',
      as: 'fromObj'
    }
  }]).match({
    $or: [
      { $and: [{ to: user1 }, { from: user2 }] },
      { $and: [{ to: user2 }, { from: user1 }] }
    ]
  }).project({
    'toObj.password': 0,
    'toObj.__v': 0,
    'toObj.date': 0,
    'fromObj.password': 0,
    'fromObj.__v': 0,
    'fromObj.date': 0
  })

  return conversations
}

const createConversationMessage = async (req, res) => {
  let from = mongoose.Types.ObjectId(req.user.id)
  let to = mongoose.Types.ObjectId(req.body.to)

  const conversation = Conversation.findOneAndUpdate(
    {
      recipients: {
        $all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }]
      }
    },
    {
      recipients: [req.user.id, req.body.to],
      lastMessage: req.body.body,
      lastMessageIsRead: false,
      lastMessageSenderId: from,
      date: Date.now()
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  )

  const newMessage = new MessageModel({
    conversation: conversation._id,
    to: req.body.to,
    from: req.user.id,
    body: req.body.body
  }).save()

  req.io.sockets.emit('messages', req.body.body)

  return await newMessage
}

const updateConversationById = async (req, res) => {
  const conversation = await ConversationModel.findByIdAndUpdate(req.params.id, req.body)
  return conversation
}

module.exports = {
  getAllAuthConversations,
  getConversationMessagesByUserId,
  createConversationMessage,
  updateConversationById
}
