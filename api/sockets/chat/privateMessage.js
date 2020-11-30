const User = require('../../domain/models/user.model')
const Room = require('../../domain/models/room.model')

module.exports = (io, socket) => {
  socket.on('send_private_message', async (sentMessgage) => {
    const { messageBody, chattingWithUser } = sentMessgage

    const authUser = await User.findById(socket.request.user._id)
    const targetUser = await User.findById(chattingWithUser._id)

    const messageToReceiver = {
      _id: Math.random(),
      emmiterId: authUser._id,
      receiverId: targetUser._id,
      messageBody
    }

    const alreadyInRoom = await Room.find({
      users: {
        $all: [authUser._id, targetUser._id]
      }
    })

    if (alreadyInRoom.length) {
      io.in(alreadyInRoom[0]._id).emit(
        'receive_private_message',
        messageToReceiver
      )
    }
  })
}
