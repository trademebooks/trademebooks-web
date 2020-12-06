import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const getAllConversations = async () => {
  try {
    return (await api.get(`/messages/conversations`)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const getAllMessagesInRoom = async (roomId) => {
  try {
    return (await api.get(`/messages/${roomId}`)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const sendMessageToRoom = async (message, roomId) => {
  try {
    const response = await api.post(`/messages`, {
      roomId,
      ...message
    })

    const responseJson = response.data.data

    return responseJson
  } catch (error) {
    displayErrors(error)
  }
}
