const Message = require('../../domain/models/message.model')
const Room = require('../../domain/models/room.model')

module.exports = (io, socket) => {
  socket.on('send_private_message', async (messageData) => {
    const { userId, roomId, messageBody } = messageData

    const room = await Room.findById(roomId)

    if (room) {
      io.in(room._id).clients((error, clients) => {
        console.log('send_private_message clients: ', { clients })
      })

      await new Message(messageData).save()

      io.in(room._id).emit(
        'receive_private_message',
        messageData
      )
    }
  })
}
