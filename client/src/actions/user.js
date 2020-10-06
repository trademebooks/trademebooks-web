import api from '../utils/api'

export const updateAuthUser = async (data) => {
  try {
    const response = await api.put(`/account/auth-user`, data)
    const responseJson = response.data.data
    return responseJson
  } catch (error) {
    console.log({ error })
  }
}
