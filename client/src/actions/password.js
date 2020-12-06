import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

import { toastr } from 'react-redux-toastr'

export const sendPasswordResetEmail = async (data) => {
  try {
    const response = (await api.post(`/auth/password/send-email`, data)).data
      .data

    toastr.success(`A password reset email has been sent.`)

    return response
  } catch (error) {
    displayErrors(error)
  }
}

export const resetPassword = async (data) => {
  try {
    const response = (await api.put(`/auth/password/reset`, data)).data.data

    toastr.success('Your password has been successfully reset.')

    return response
  } catch (error) {
    displayErrors(error)
  }
}
