import api from '../utils/api'
import { toastr } from 'react-redux-toastr'
import {
  GET_BOOKS,
  GET_BOOK,
  ADD_BOOK,
  CREATE_BOOK,
  UPDATE_BOOK
} from './types'

export const getAuthBooks = (formData) => async (dispatch) => {
  const book = await api.get(`/books`)

  dispatch({
    type: GET_BOOKS,
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
        description: '',
        authors: [],
        isbn_10: '',
        isbn_13: '',
        condition: 'GOOD',
        imageUrl: '',
        edition: ''
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

// Update a book Listing
export const updateBook = (bookId, book) => async (dispatch) => {
  console.log({ book })
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

// Get a book
export const deleteBookById = async (bookId) => {
  const book = await api.delete(`/books/${bookId}`)
  // DELETE_BOOK
  toastr.success('Book listing deleted.')
}
