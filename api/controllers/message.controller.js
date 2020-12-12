const catchException = require('../utils/catchExceptions')
const globalResponseDto = require('../dtos/responses/globalResponseDto')
const messageService = require('../domain/services/message.service')

const Message = require('../domain/models/chat/message.model')
const Conversation = require('../domain/models/chat/conversation.model')
const GlobalMessage = require('../domain/models/chat/globalMessage.model')

// Get global messages
const getGlobalMessages = catchException(async (req, res) => {
  GlobalMessage.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'from',
        foreignField: '_id',
        as: 'fromObj'
      }
    }
  ])
    .project({
      'fromObj.password': 0,
      'fromObj.__v': 0,
      'fromObj.date': 0
    })
    .exec((err, messages) => {
      if (err) {
        console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Failure' }))
        res.sendStatus(500)
      } else {
        res.send(messages)
      }
    })
})

// Post global message
const postGlobalMessages = catchException(async (req, res, next) => {
  let message = new GlobalMessage({
    from: jwtUser.id,
    body: req.body.body
  })

  req.io.sockets.emit('messages', req.body.body)

  message.save((err) => {
    if (err) {
      console.log(err)
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Failure' }))
      res.sendStatus(500)
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Success' }))
    }
  })
})

// Get conversations list
const getConversations = catchException(async (req, res, next) => {
  let from = mongoose.Types.ObjectId(jwtUser.id)
  Conversation.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'recipients',
        foreignField: '_id',
        as: 'recipientObj'
      }
    }
  ])
    .match({ recipients: { $all: [{ $elemMatch: { $eq: from } }] } })
    .project({
      'recipientObj.password': 0,
      'recipientObj.__v': 0,
      'recipientObj.date': 0
    })
    .exec((err, conversations) => {
      if (err) {
        console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Failure' }))
        res.sendStatus(500)
      } else {
        res.send(conversations)
      }
    })
})

// Get messages from conversation
// based on to & from
const getConversationsQuery = catchException(async (req, res, next) => {
  let from = mongoose.Types.ObjectId(jwtUser.id)
  Conversation.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'recipients',
        foreignField: '_id',
        as: 'recipientObj'
      }
    }
  ])
    .match({ recipients: { $all: [{ $elemMatch: { $eq: from } }] } })
    .project({
      'recipientObj.password': 0,
      'recipientObj.__v': 0,
      'recipientObj.date': 0
    })
    .exec((err, conversations) => {
      if (err) {
        console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Failure' }))
        res.sendStatus(500)
      } else {
        res.send(conversations)
      }
    })
})

// Post private message
const postSendPrivateMessage = catchException(async (req, res, next) => {
  let from = mongoose.Types.ObjectId(jwtUser.id)
  let to = mongoose.Types.ObjectId(req.body.to)

  Conversation.findOneAndUpdate(
    {
      recipients: {
        $all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }]
      }
    },
    {
      recipients: [jwtUser.id, req.body.to],
      lastMessage: req.body.body,
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
          from: jwtUser.id,
          body: req.body.body
        })

        req.io.sockets.emit('messages', req.body.body)

        message.save((err) => {
          if (err) {
            console.log(err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Failure' }))
            res.sendStatus(500)
          } else {
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                message: 'Success',
                conversationId: conversation._id
              })
            )
          }
        })
      }
    }
  )
})

module.exports = {
  getGlobalMessages,
  postGlobalMessages,
  getConversations,
  getConversationsQuery,
  postSendPrivateMessage
}
