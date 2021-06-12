import api from '../../utils/api'
import displayErrors from '../utils/displayErrors'

// Receive global messages
export const getGlobalMessages = async () => {
  try {
    const getGlobalMessagesResponse = (await api.get(`/messages/global`)).data
      .data

    return getGlobalMessagesResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}

// Send a global message
export const sendGlobalMessage = async (body) => {
  try {
    const sendGlobalMessageResponse = (
      await api.post('/messages/global', { body: body, global: true })
    ).data.data

    return sendGlobalMessageResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}

// Get list of users conversations
export const getConversations = async () => {
  try {
    const getConversationsResponse = (await api.get(`/conversations`)).data.data

    return getConversationsResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}

// get conversation messages based on
// to and from id's
export const getConversationMessages = async (id) => {
  try {
    const getConversationMessagesResponse = (
      await api.get(`/conversations/messages?userId=${id}`)
    ).data.data

    return getConversationMessagesResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}

// send message
export const sendConversationMessage = async (toUserId, body) => {
  try {
    const sendConversationMessageResponse = (
      await api.post('/conversation/messages', { toUserId, body: body })
    ).data.data

    return sendConversationMessageResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}

// update conversation
export const updateConversation = async (conversationId) => {
  try {
    const updateConversationResponse = (
      await api.put(`/conversations/${conversationId}`)
    ).data.data

    return updateConversationResponse
  } catch (error) {
    console.log(error)

    displayErrors(error)
  }
}
