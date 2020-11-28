import { GET_BOOKSTORE, GET_BOOK, UPDATE_BOOK } from '../actions/types'

const initialState = {
  book: {
    title: '',
    price: '',
    description: '',
    authors: [],
    isbn_10: '',
    isbn_13: '',
    condition: 'GOOD',
    imageUrl: '',
    edition: ''
  },
  books: []
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_BOOKSTORE:
      return {
        ...state,
        books: payload,
        loading: false
      }
    case GET_BOOK:
      return {
        book: {
          ...state.book,
          ...payload
        },
        loading: false
      }
    case UPDATE_BOOK:
      return {
        book: {
          ...state.book,
          ...payload
        },
        loading: false
      }
    default:
      return state
  }
}
