import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const getAccountSettings = async () => {
  try {
    return (await api.get(`/account`)).data.data
  } catch (error) {
    const errors = error.response.data.errors
    displayErrors(errors)
  }
}

export const saveAccountSettings = async (data) => {
  try {
    return (await api.put(`/account`, data)).data.data
  } catch (error) {
    const errors = error.response.data.errors
    displayErrors(errors)
  }
}
