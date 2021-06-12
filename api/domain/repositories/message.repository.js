const mongoose = require('mongoose')

const ConversationModel = require('../models/chat/conversation.model')
const MessageModel = require('../models/chat/message.model')

const getAllAuthConversations = async (authId) => {
  const fromUserId = mongoose.Types.ObjectId(authId)

  // Gets all the conversations that have at least 1 or more
  // messages exchanged between the (auth) user and everyone else
  const conversations = await ConversationModel.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'recipients',
        foreignField: '_id',
        as: 'recipientUsers'
      }
    }
  ])
    .match({ recipients: { $all: [{ $elemMatch: { $eq: fromUserId } }] } })
    .project({
      'recipientUsers.password': 0,
      'recipientUsers.__v': 0,
      'recipientUsers.username': 0,
      'recipientUsers.email': 0,
      'recipientUsers.phone_number': 0,
      'recipientUsers.google_id': 0,
      'recipientUsers.createdAt': 0,
      'recipientUsers.updatedAt': 0,
      __v: 0,
      recipients: 0
    })
    .sort({ date: 'desc' })

  // Add a 'chattingWithUser' field to indicate who the auth user is chatting with in that particular conversation
  return conversations.map((conversation) => {
    const chattingWithUser = conversation.recipientUsers.find(
      (recipentUser) => {
        return recipentUser._id.toString() !== authId.toString()
      }
    )

    return {
      ...conversation,
      chattingWithUser
    }
  })
}

const getConversationMessagesByUserId = async (authId, userId) => {
  const authUserId = mongoose.Types.ObjectId(authId) // auth user
  const otherUserId = mongoose.Types.ObjectId(userId) // other user

  const messages = await MessageModel.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'fromUserId',
        foreignField: '_id',
        as: 'senderUser'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'toUserId',
        foreignField: '_id',
        as: 'recipientUser'
      }
    }
  ])
    .match({
      $or: [
        { $and: [{ fromUserId: otherUserId }, { toUserId: authUserId }] },
        { $and: [{ fromUserId: authUserId }, { toUserId: otherUserId }] }
      ]
    })
    .project({
      'senderUser.password': 0,
      'senderUser.__v': 0,
      'senderUser.username': 0,
      'senderUser.email': 0,
      'senderUser.phone_number': 0,
      'senderUser.google_id': 0,
      'senderUser.createdAt': 0,
      'senderUser.updatedAt': 0,
      'recipientUser.password': 0,
      'recipientUser.__v': 0,
      'recipientUser.username': 0,
      'recipientUser.email': 0,
      'recipientUser.phone_number': 0,
      'recipientUser.google_id': 0,
      'recipientUser.createdAt': 0,
      'recipientUser.updatedAt': 0,
      __v: 0
    })

  return messages.map((message) => {
    return {
      ...message,
      senderUser: message['senderUser'][0],
      recipientUser: message['recipientUser'][0]
    }
  })
}

const sendConversationMessageToRecipientId = async (
  authId,
  recipientUserId,
  messageBody
) => {
  const fromUserId = mongoose.Types.ObjectId(authId)
  const toUserId = mongoose.Types.ObjectId(recipientUserId)

  // If there is already an existing conversation between the fromUserId and toUserId, then don't
  // create a new conversation, simply update it with new information.
  const conversation = await ConversationModel.findOneAndUpdate(
    {
      recipients: {
        $all: [
          { $elemMatch: { $eq: fromUserId } },
          { $elemMatch: { $eq: toUserId } }
        ]
      }
    },
    {
      recipients: [fromUserId, toUserId],
      lastestMessage: messageBody,
      usersWhoHaveReadLastestMessage: [authId]
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  )

  // Create a new message attached to that particular conversation above.
  const newMessage = new MessageModel({
    conversationId: conversation.id,
    fromUserId,
    toUserId,
    body: messageBody
  }).save()

  return await newMessage
}

const updateConversationByIdAndMarkAsRead = async (conversationId, authId) => {
  const conversation = await ConversationModel.findById(conversationId)

  // If the user has read a message more than once, we get rid of the duplicate ids.
  const conversationUsersWhoHaveReadLastestMessage = [
    ...new Set([authId, ...conversation.usersWhoHaveReadLastestMessage])
  ]

  const updatedConversation = await ConversationModel.findByIdAndUpdate(
    conversationId,
    {
      usersWhoHaveReadLastestMessage: conversationUsersWhoHaveReadLastestMessage
    },
    { new: true }
  )

  return updatedConversation
}

module.exports = {
  getAllAuthConversations,
  getConversationMessagesByUserId,
  sendConversationMessageToRecipientId,
  updateConversationByIdAndMarkAsRead
}
