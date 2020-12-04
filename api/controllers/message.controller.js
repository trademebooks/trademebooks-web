const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const messageService = require('../domain/services/message.service')

const catchException = require('../utils/catchExceptions')

const getAllConversations = catchException(async (req, res, next) => {
  const converations = await messageService.getAllConversations(req.user._id)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `List of all messages.`,
      data: converations,
      errors: null
    })
  )
})

const getAllMessagesInRoom = catchException(async (req, res, next) => {
  const messages = await messageService.getAllMessagesInRoom(req.params)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `List of all messages.`,
      data: messages,
      errors: null
    })
  )
})

const sendAMessageToRoom = catchException(async (req, res, next) => {
  const messageCreated = await messageService.sendMessagesToRoomId(req.body)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The message has successfully been sent.`,
      data: messageCreated,
      errors: null
    })
  )
})

module.exports = {
  getAllConversations,
  getAllMessagesInRoom,
  sendAMessageToRoom
}
