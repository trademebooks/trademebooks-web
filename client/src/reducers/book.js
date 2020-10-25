import { GET_BOOK, ADD_BOOK, UPDATE_BOOK } from '../actions/types'

const initialState = {
  books: [],
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
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_BOOK:
      return {
        ...state,
        book: payload,
        loading: false
      }
    case ADD_BOOK:
      return {
        ...state,
        book: payload,
        loading: false
      }
    case UPDATE_BOOK:
      return {
        ...state,
        book: payload,
        loading: false
      }
    default:
      return state
  }
}
