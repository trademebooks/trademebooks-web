import api from '../utils/api'

import { GET_BOOKSTORE } from './types'

export const getBookstoreByUsername = (username) => async (dispatch) => {
  try {
    const response = await api.get(`/bookstores/${username}`)
    const books = response.data.data

    dispatch({
      type: GET_BOOKSTORE,
      payload: books
    })
  } catch (error) {
    console.log({ error })
  }
}

export const deleteBookById = (bookId) => async (dispatch) => {
  console.log('deleteBookById')
  try {
    const deletedBook = await api.delete(`/books/${bookId}`)
    console.log({ deletedBook })

    const response = await api.get(`/bookstores/auth`)
    const books = response.data.data

    dispatch({
      type: GET_BOOKSTORE,
      payload: books
    })
  } catch (error) {
    console.log({ error })
  }
}
