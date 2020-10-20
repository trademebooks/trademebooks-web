import api from '../utils/api'
import { toastr } from 'react-redux-toastr'
import {
  GET_BOOKS,
  GET_BOOK,
  ADD_BOOK,
  CREATE_BOOK,
  DELETE_BOOK
} from './types'

export const getBooks = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData
  })
}

// Add book
export const addBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData
  })
}

// Get a book
export const getBook = (bookId) => async (dispatch) => {
  const book = await api.get(`/books/${bookId}`)
  dispatch({
    type: GET_BOOK,
    payload: book.data.data
  })
}

// Create a book Listing
export const createBook = (book) => async (dispatch) => {
  try {
    await api.post(`/books`, book)

    dispatch({
      type: CREATE_BOOK,
      payload: book
    })

    toastr.success('Book listing created successful')

    dispatch({
      type: ADD_BOOK,
      payload: {
        title: '',
        price: '',
        description: ''
      }
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

// Get a book
export const deleteBookById = async (bookId) => {
  const book = await api.delete(`/books/${bookId}`)

  toastr.success('Book listing deleted.')
}
