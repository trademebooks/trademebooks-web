import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const sendPasswordResetEmail = (formData) => async (dispatch) => {
  try {
    return (await api.post(`/auth/password/send-email`, formData)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const resetPassword = (formData) => async (dispatch) => {
  try {
    return (await api.post(`/auth/password/reset`, formData)).data.data
  } catch (error) {
    displayErrors(error)
  }
}
