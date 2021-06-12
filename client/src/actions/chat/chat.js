import api from '../../utils/api'

// Receive global messages
export const getGlobalMessages = async () => {
  try {
    const getGlobalMessagesResponse = (await api.get(`/messages/global`)).data
      .data

    return getGlobalMessagesResponse
  } catch (err) {
    console.log(err)
  }
}

// Send a global message
export const sendGlobalMessage = async (body) => {
  try {
    const sendGlobalMessageResponse = (
      await api.post('/messages/global', { body: body, global: true })
    ).data.data

    return sendGlobalMessageResponse
  } catch (err) {
    console.log(err)
  }
}

// Get list of users conversations
export const getConversations = async () => {
  try {
    const getConversationsResponse = (await api.get(`/conversations`))
      .data.data

    return getConversationsResponse
  } catch (err) {
    console.log(err)
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
  } catch (err) {
    console.log(err)
  }
}

// send message
export const sendConversationMessage = async (toUserId, body) => {
  try {
    const sendConversationMessageResponse = (
      await api.post('/conversation/messages', { toUserId, body: body })
    ).data

    return sendConversationMessageResponse
  } catch (err) {
    console.log(err)
  }
}

// update conversation
export const updateConversation = async (conversationId) => {
  try {
    const updateConversationResponse = (
      await api.put(`/conversations/${conversationId}`)
    ).data.data

    return updateConversationResponse
  } catch (err) {
    console.log(err)
  }
}
