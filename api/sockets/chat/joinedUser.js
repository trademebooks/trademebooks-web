const User = require('../../domain/models/user.model')

module.exports = (io, socket) => {
  socket.on('join user', async (user) => {
    // get the currently authenticated user
    const onlineUser = await User.findById(socket.request.session.user._id)

    // get online users
    const onlineUsers = await User.find({}).where('_id').ne(onlineUser._id)

    // console.log({ onlineUser, onlineUsers })

    // send to current request socket client
    socket.emit('user joined', onlineUsers)

    // sending to all clients except sender
    socket.broadcast.emit('new online user', onlineUser)
  })
}
