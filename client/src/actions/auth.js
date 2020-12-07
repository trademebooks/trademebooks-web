import { toastr } from 'react-redux-toastr'

import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

import { USER_LOADED, AUTH_ERROR } from './types'

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth/user')

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const register = (formData) => async (dispatch) => {
  try {
    await api.post('/auth/register', formData)

    dispatch(loadUser())

    toastr.success('You have successfully registered! Try logging in now!')
  } catch (error) {
    displayErrors(error)
  }
}

export const login = (formData) => async (dispatch) => {
  try {
    await api.post('/auth/login', formData)

    dispatch(loadUser())

    toastr.success('Welcome. You have logged in!')
  } catch (error) {
    displayErrors(error)
  }
}

export const logout = () => async (dispatch) => {
  try {
    await api.get('/auth/logout')

    dispatch(loadUser())

    toastr.success('You have logged out.')
  } catch (error) {
    displayErrors(error)
  }
}
