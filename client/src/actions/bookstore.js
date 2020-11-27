import api from '../utils/api'
import { toastr } from 'react-redux-toastr'
import { GET_BOOKSTORE, GET_BOOK, UPDATE_BOOK } from './types'

// API: Get a bookstore with its description and all its books
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

// API: Get a book by id
export const getBook = (bookId) => async (dispatch) => {
  try {
    const book = await api.get(`/books/${bookId}`)

    dispatch({
      type: GET_BOOK,
      payload: book.data.data
    })
  } catch (error) {
    console.log({ error })
  }
}

// API: Update a book Listing
export const updateBook = (bookId, book) => async (dispatch) => {
  try {
    await api.put(`/books/${bookId}`, book)

    toastr.success('Book listing updated successful')

    dispatch({
      type: UPDATE_BOOK,
      payload: book
    })
  } catch (err) {
    const data = err.response.data
    const errors = data.errors

    if (errors) {
      errors.forEach((errorMessage) => {
        toastr.error(errorMessage)
      })
    }
  }
}

// API: Delete a book Listing
export const deleteBookById = (bookId) => async (dispatch) => {
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
