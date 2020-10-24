import { GET_BOOKSTORE } from '../actions/types'

const initialState = {
  bookstore: {},
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
    default:
      return state
  }
}
