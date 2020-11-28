import api from '../utils/api'

import { toastr } from 'react-redux-toastr'

export const sendPasswordResetEmail = async (data) => {
  try {
    const response = await api.post(`/auth/password/send-email`, data)
    const responseJson = response.data.data

    toastr.success(`A password reset email has been sent.`)

    return responseJson
  } catch (error) {
    console.log({ error })
  }
}

export const resetPassword = async (data) => {
  try {
    const response = await api.put(`/auth/password/reset`, data)
    const responseJson = response.data.data

    toastr.success('Your password has been successfully reset.')

    return responseJson
  } catch (error) {
    console.log({ error })
  }
}
