const globalResponseDTO = require('../responses/globalResponseDTO')
const messageService = require('../domain/services/message.service')

const catchException = require('../utils/catchExceptions')

const getAllMessagesInRoom = catchException(async (req, res, next) => {
  const messages = await messageService.getAllMessages()

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      (message = `List of all messages.`),
      (data = messages),
      (errors = null)
    )
  )
})

const sendAMessageToRoom = catchException(async (req, res, next) => {
  const message = await messageService.sendMessagesToRoomId()

  return res
    .status(200)
    .json(
      globalResponseDTO(
        (status = 'success'),
        (code = 200),
        (message = `The message has successfully been sent.`),
        (data = message),
        (errors = null)
      )
    )
})

module.exports = {
  getAllMessagesInRoom,
  sendAMessageToRoom
}
