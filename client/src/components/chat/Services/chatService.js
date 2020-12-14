import api from '../../../utils/api'
// import displayErrors from '../../../utils/displayErrors'

// Receive global messages
export const getGlobalMessages = async () => {
  try {
    const getGlobalMessagesResponse = (await api.get(`/messages/global`)).data

    console.log({ getGlobalMessagesResponse })

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
    ).data

    console.log({ sendGlobalMessageResponse })

    return sendGlobalMessageResponse
  } catch (err) {
    console.log(err)
  }
}

// Get list of users conversations
export const getConversations = async () => {
  try {
    const getConversationsResponse = (await api.get(`/messages/conversations`))
      .data

    console.log({ getConversationsResponse })

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
      await api.get(`/messages/conversations/query?userId=${id}`)
    ).data

    console.log({ getConversationMessagesResponse })

    return getConversationMessagesResponse
  } catch (err) {
    console.log(err)
  }
}

export const sendConversationMessage = async (id, body) => {
  try {
    const sendConversationMessageResponse = (
      await api.post('/messages', { to: id, body: body })
    ).data

    console.log({ sendConversationMessageResponse })

    return sendConversationMessageResponse
  } catch (err) {
    console.log(err)
  }
}
