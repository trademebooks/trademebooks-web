import { ADD_BOOK, CREATE_BOOK } from '../actions/types'

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
  loading: true
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_BOOK:
      return {
        book: {
          ...state.book,
          ...payload
        },
        loading: false
      }
    case CREATE_BOOK:
      return {
        book: {
          ...state,
          ...payload
        },
        loading: false
      }
    default:
      return state
  }
}
