const User = require('../../domain/models/user.model')
const Room = require('../../domain/models/room.model')

module.exports = (io, socket) => {
  socket.on('join_private_room', async (chatUser) => {
    const { room_id, user } = chatUser

    const authUserId =
      socket.request.session.passport.user || socket.request.session.user._id

    const authUser = await User.findById(authUserId)
    const targetUser = await User.findById(user._id)

    const room = await Room.findOne({
      users: {
        $all: [authUser._id, targetUser._id]
      }
    })

    if (room) {
      io.in(room._id).clients((error, clients) => {
        console.log('before clients: ', { clients })
        socket.join(room._id)

        io.in(room._id).clients((error, clients) => {
          console.log('after clients: ', { clients })
        })
      })
    } else {
      const newRoom = new Room({ users: [authUser._id, targetUser._id] })
      await newRoom.save()

      socket.join(newRoom._id)

      io.in(newRoom._id).clients((error, clients) => {
        console.log('after creating new room - clients: ', { clients })
      })
    }
  })
}
