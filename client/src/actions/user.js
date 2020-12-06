import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const updateAuthUser = async (data) => {
  try {
    return (await api.put(`/account/auth-user`, data)).data.data
  } catch (error) {
    displayErrors(error)
  }
}
