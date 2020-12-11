import api from '../utils/api'
import displayErrors from '../utils/displayErrors'
import { toastr } from 'react-redux-toastr'
import { GET_BOOKSTORE, GET_BOOK, UPDATE_BOOK } from './types'

// API: Get a bookstore with its description and all its books
export const getBookstoreByUsername = (username) => async (dispatch) => {
  try {
    if (username === 'auth') {
      const bookstoreBooks = (await api.get(`/bookstores/${username}`)).data
        .data

      console.log('auth', { bookstoreBooks })

      dispatch({
        type: GET_BOOKSTORE,
        payload: bookstoreBooks
      })
    } else {
      const bookstoreBooks = (await api.get(`/bookstores/${username}`)).data
        .data

      console.log('notauth', bookstoreBooks.books)

      dispatch({
        type: GET_BOOKSTORE,
        payload: bookstoreBooks.books
      })
    }
  } catch (error) {
    displayErrors(error)
  }
}

// API: Get a book by id
export const getBook = (bookId) => async (dispatch) => {
  try {
    const book = (await api.get(`/books/${bookId}`)).data.data

    dispatch({
      type: GET_BOOK,
      payload: book.data.data
    })
  } catch (error) {
    displayErrors(error)
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
  } catch (error) {
    displayErrors(error)
  }
}

// API: Delete a book Listing
export const deleteBookById = (bookId) => async (dispatch) => {
  try {
    await api.delete(`/books/${bookId}`)
    const response = await api.get(`/bookstores/auth`)
    const books = response.data.data

    toastr.success('Book has been deleted.')

    dispatch({
      type: GET_BOOKSTORE,
      payload: books
    })
  } catch (error) {
    displayErrors(error)
  }
}
