const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchException = require('../utils/catchExceptions')
const GlobalMessage = require('../domain/models/chat/globalMessage.model')
const messageService = require('../domain/services/message.service')
const ApiGeneralError = require('../utils/ApiGeneralError')

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
  const conversations = await messageService.getAllAuthConversations(
    req.user.id
  )

  res.status(200).json(
    globalResponseDto({
      message: 'A a list of conversations of the currently authenticated user.',
      data: conversations
    })
  )
})

// Get messages from conversation between the auth user and the specified userId
const getConversationMessagesByUserId = catchException(async (req, res) => {
  const messages = await messageService.getConversationMessagesByUserId(
    req.user.id,
    req.query.userId
  )

  res.status(200).json(
    globalResponseDto({
      message:
        'Gets a specified conversation and its messages between the current auth user and the specified userId.',
      data: messages
    })
  )
})

// Send private message
const startConversationWithRecipient = catchException(async (req, res) => {
  if (!req.body.toRecipientId) {
    console.log('toRecipientId is required.')

    throw new ApiGeneralError({
      errors: ['toRecipientId is required.']
    })
  }

  const newMessage = await messageService.startConversationWithRecipient(
    req.user.id,
    req.body.toRecipientId
  )

  res.status(200).json(
    globalResponseDto({
      message: 'Conversation started with recipient user.',
      data: newMessage
    })
  )
})

// Send private message
const sendMessageToUserInConveration = catchException(async (req, res) => {
  if (!req.body.toRecipientId) {
    console.log('toRecipientId is required.')

    throw new ApiGeneralError({
      errors: ['toRecipientId is required.']
    })
  }

  if (!req.body.messageBody) {
    console.log('messageBody is required.')

    throw new ApiGeneralError({
      errors: ['messageBody is required.']
    })
  }

  const newMessage = await messageService.sendMessageToUserInConveration(
    req.user.id,
    req.body.toRecipientId,
    req.body.messageBody
  )

  // Event - 'messages'
  req.io.sockets.emit('messages', newMessage)

  res.status(200).json(
    globalResponseDto({
      message:
        'Sent a message from the currently authenticated user to the specified userId.',
      data: newMessage
    })
  )
})

// Updates a conversation - mark it as read
const updateConversationById = catchException(async (req, res) => {
  const updatedConveration = messageService.updateConversationById(
    req.params.conversationId,
    req.user.id
  )

  // Event - 'messages'
  req.io.sockets.emit('messages', { updatedConveration })

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
  startConversationWithRecipient,
  sendMessageToUserInConveration,
  updateConversationById
}
