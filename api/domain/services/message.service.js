const Message = require('../models/message.model')
const Room = require('../models/room.model')
const User = require('../models/user.model')

const getAllConversations = async (authId) => {
  const rooms = await Room.find({
    users: {
      $in: [authId]
    }
  })

  const conversations = await Promise.all(
    rooms.map(async (room) => {
      const userId = room.users.find((user) => {
        return user.toString() !== authId
      })

      const user = await User.findById(userId)

      return {
        room_id: room._id,
        user
      }
    })
  )

  return conversations
}

const getAllMessagesInRoom = async ({ roomId }) => {
  const messagesInRoom = await Message.find({ roomId })

  return messagesInRoom
}

const sendMessagesToRoomId = async (messageData) => {
  const message = new Message(messageData).save()
  return message
}

module.exports = {
  getAllConversations,
  getAllMessagesInRoom,
  sendMessagesToRoomId
}
