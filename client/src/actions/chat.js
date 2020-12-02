import api from '../utils/api'

export const getAllConversations = async () => {
  try {
    const response = await api.get(`/messages/conversations`)
    const responseJson = response.data.data

    return responseJson
  } catch (error) {
    console.log({ error })
  }
}

export const getAllMessagesInRoom = async (roomId) => {
  try {
    const response = await api.get(`/messages/${roomId}`)
    const responseJson = response.data.data

    return responseJson
  } catch (error) {
    console.log({ error })
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
    console.log({ error })
  }
}
