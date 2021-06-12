const messageRepository = require('../repositories/message.repository')

const getAllAuthConversations = async (authId) => {
  return await messageRepository.getAllAuthConversations(authId)
}

const getConversationMessagesByUserId = async (authId, toChatUserId) => {
  return await messageRepository.getConversationMessagesByUserId(
    authId,
    toChatUserId
  )
}

const sendMessageToUserInConveration = async (authId, recipientUserId, messageBody) => {
  return await messageRepository.sendConversationMessageToRecipientId(
    authId,
    recipientUserId,
    messageBody
  )
}

const updateConversationById = async (conversationId, authId) => {
  return await messageRepository.updateConversationByIdAndMarkAsRead(
    conversationId,
    authId
  )
}

module.exports = {
  getAllAuthConversations,
  getConversationMessagesByUserId,
  sendMessageToUserInConveration,
  updateConversationById
}
