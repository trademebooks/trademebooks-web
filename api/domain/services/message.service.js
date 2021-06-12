const messageRepository = require('../repositories/message.repository')

const getAllAuthConversations = async (authId) => {
  const conversations = await messageRepository.getAllAuthConversations(authId)
  return conversations
}

const getConversationMessagesByUserId = async (authId, toChatUserId) => {
  return await messageRepository.getConversationMessagesByUserId(
    authId,
    toChatUserId
  )
}

const sendMessageToUserInConveration = async (messageData) => {
  return await messageRepository.sendMessageToUserInConveration(messageData)
}

const updateConversationById = async (conversationId) => {
  return await messageRepository.updateConversationById(conversationId)
}

module.exports = {
  getAllAuthConversations,
  getConversationMessagesByUserId,
  sendMessageToUserInConveration,
  updateConversationById
}
