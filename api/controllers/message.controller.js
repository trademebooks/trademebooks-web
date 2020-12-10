const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchException = require('../utils/catchExceptions')
const messageService = require('../domain/services/message.service')

const getAllConversations = catchException(async (req, res, next) => {
  const converations = await messageService.getAllConversations(req.user._id)

  res.status(200).json(
    globalResponseDto({
      message: `List of all messages.`,
      data: converations
    })
  )
})

const getAllMessagesInRoom = catchException(async (req, res, next) => {
  const messages = await messageService.getAllMessagesInRoom(req.params)

  res.status(200).json(
    globalResponseDto({
      message: `List of all messages.`,
      data: messages
    })
  )
})

const sendAMessageToRoom = catchException(async (req, res, next) => {
  const messageCreated = await messageService.sendMessagesToRoomId(req.body)

  res.status(200).json(
    globalResponseDto({
      message: `The message has successfully been sent.`,
      data: messageCreated
    })
  )
})

module.exports = {
  getAllConversations,
  getAllMessagesInRoom,
  sendAMessageToRoom
}
