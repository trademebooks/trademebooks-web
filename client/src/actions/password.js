import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

import { toastr } from 'react-redux-toastr'

export const sendPasswordResetEmail = async (data) => {
  try {
    return (await api.post(`/auth/password/send-email`, data)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const resetPassword = async (data) => {
  try {
    return (await api.post(`/auth/password/reset`, data)).data.data
  } catch (error) {
    displayErrors(error)
  }
}
