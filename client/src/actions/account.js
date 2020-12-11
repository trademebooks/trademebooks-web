import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const getAccountSettings = () => async (dispatch) => {
  try {
    return (await api.get(`/account`)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const saveAccountSettings = (data) => async (dispatch) => {
  try {
    return (await api.put(`/account`, data)).data.data
  } catch (error) {
    displayErrors(error)
  }
}

export const updateAuthUser = (data) => async (dispatch) => {
  try {
    return (await api.put(`/account/auth-user`, data)).data.data
  } catch (error) {
    displayErrors(error)
  }
}
