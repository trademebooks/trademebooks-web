const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchException = require('../utils/catchExceptions')
const GlobalMessage = require('../domain/models/chat/globalMessage.model')
const messageService = require('../domain/services/message.service')

// Get global messages
const getGlobalMessages = catchException(async (req, res) => {
  const messages = await GlobalMessage.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'from',
        foreignField: '_id',
        as: 'fromObj'
      }
    }
  ]).project({
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

// Get all the list of of the currently authenticated user
const getAllAuthConversations = catchException(async (req, res) => {
  const conversations = messageService.getAllAuthConversations(req.user.id)

  res.status(200).json(
    globalResponseDto({
      message: 'A a list of conversations of the currently authenticated user.',
      data: conversations
    })
  )
})

// Get messages from conversation
// based on to & from
const getConversationMessagesByUserId = catchException(async (req, res) => {
  const messages = messageService.getConversationMessagesByUserId()

  res.status(200).json(
    globalResponseDto({
      message:
        'Gets a specified conversation and its messages between the current auth user and the specified userId.',
      data: messages
    })
  )
})

// Send private message
const sendMessageToUserInConveration = catchException(async (req, res) => {
  const newMessage = messageService.sendMessageToUserInConveration()

  res.status(200).json(
    globalResponseDto({
      message:
        'Sent a message from the currently authenticated user to a specified userId.',
      data: newMessage
    })
  )
})

// Updates a conversation - mark it as read
const updateConversationById = catchException(async (req, res) => {
  const updatedConveration = messageService.updateConversationById()

  res.status(200).json(
    globalResponseDto({
      message:
        'Updated the conversation by its conversationId, marking the conversation as read.',
      data: updatedConveration
    })
  )
})

module.exports = {
  getGlobalMessages,
  postGlobalMessages,
  getAllAuthConversations,
  getConversationMessagesByUserId,
  sendMessageToUserInConveration,
  updateConversationById
}
