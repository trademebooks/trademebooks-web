const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchException = require('../utils/catchExceptions')
const Message = require('../domain/models/chat/message.model')
const Conversation = require('../domain/models/chat/conversation.model')
const GlobalMessage = require('../domain/models/chat/globalMessage.model')

const mongoose = require('mongoose')

// Get global messages
const getGlobalMessages = catchException(async (req, res) => {
  const messages = await GlobalMessage.aggregate([{
    $lookup: {
      from: 'users',
      localField: 'from',
      foreignField: '_id',
      as: 'fromObj'
    }
  }]).project({
    'fromObj.password': 0,
    'fromObj.__v': 0,
    'fromObj.date': 0
  })

  res.status(200).json(
    globalResponseDto({
      message: 'All the messages in the global chat.',
      data: messages
    })
  )
})

// Post global message
const postGlobalMessages = catchException(async (req, res) => {
  let message = new GlobalMessage({
    from: req.user.id,
    body: req.body.body
  })

  req.io.sockets.emit('messages', req.body.body)

  const returnResposne = await message.save()

  res.status(200).json(
    globalResponseDto({
      message: 'Successfully sent the message to the global chat.',
      data: returnResposne
    })
  )
})

// Get conversations list
const getConversations = catchException(async (req, res) => {
  const from = mongoose.Types.ObjectId(req.user.id)

  const conversations = await Conversation.aggregate([{
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

  res.status(200).json(
    globalResponseDto({
      message: 'All the messages in the global chat.',
      data: conversations
    })
  )
})

// Get messages from conversation
// based on to & from
const getConversationsQuery = catchException(async (req, res) => {
  const user1 = mongoose.Types.ObjectId(req.user.id)
  const user2 = mongoose.Types.ObjectId(req.query.userId)

  const conversations = await Message.aggregate([{
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

  res.status(200).json(
    globalResponseDto({
      message: 'All the messages by conversation id.',
      data: conversations
    })
  )
})

// Post - send private message
const postSendPrivateMessage = catchException(async (req, res) => {
  let from = mongoose.Types.ObjectId(req.user.id)
  let to = mongoose.Types.ObjectId(req.body.to)

  Conversation.findOneAndUpdate(
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
    { upsert: true, new: true, setDefaultsOnInsert: true },
    function (err, conversation) {
      if (err) {
        console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Failure' }))
        res.sendStatus(500)
      } else {
        let message = new Message({
          conversation: conversation._id,
          to: req.body.to,
          from: req.user.id,
          body: req.body.body
        })

        req.io.sockets.emit('messages', req.body.body)

        message.save((err, newMessage) => {
          if (err) {
            console.log(err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Failure' }))
            res.sendStatus(500)
          } else {
            res.status(200).json(
              globalResponseDto({
                message: 'Successfully sent the message to the converation',
                data: {
                  conversation: conversation._id,
                  newMessage
                }
              })
            )
          }
        })
      }
    }
  )
})

// Post - update a conversation - make it read
const putUpdateConversation = catchException(async (req, res) => {
  const converation = await Conversation.findByIdAndUpdate(req.params.id, req.body)

  res.status(200).json(
    globalResponseDto({
      message: 'All the messages in the global chat.',
      data: converation
    })
  )
})

module.exports = {
  getGlobalMessages,
  postGlobalMessages,
  getConversations,
  getConversationsQuery,
  postSendPrivateMessage,
  putUpdateConversation
}
