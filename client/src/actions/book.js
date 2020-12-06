import { toastr } from 'react-redux-toastr'

import { ADD_BOOK, CREATE_BOOK } from './types'

import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

// Util: Add book
export const addBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData
  })
}

// API: Create a book Listing
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
  } catch (error) {
    displayErrors(error)
  }
}
