const User = require('../../domain/models/user.model')
const Room = require('../../domain/models/room.model')

module.exports = (io, socket) => {
  socket.on('join_private_room', async (chattingWithUser) => {
    const authUser = await User.findById(socket.request.session.user._id)
    const targetUser = await User.findById(chattingWithUser._id)

    const alreadyInRoom = await Room.find({
      users: {
        $all: [authUser._id, targetUser._id]
      }
    })

    if (alreadyInRoom.length) {
      io.in(alreadyInRoom[0]._id).clients((error, clients) => {
        // if user is not inside the room yet, then join that room
        if (clients.every((x) => String(x) !== String(authUser._id))) {
          socket.join(alreadyInRoom[0]._id)
        }
      })
    } else {
      const newRoom = new Room({ users: [authUser._id, targetUser._id] })
      await newRoom.save()

      socket.join(newRoom._id)
    }
  })
}
