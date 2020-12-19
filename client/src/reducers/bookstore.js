import {
  GET_BOOKSTORE,
  ADD_EDIT_BOOK,
  LOAD_EDIT_BOOK,
  UPDATE_EDIT_BOOK
} from '../actions/types'

const initialState = {
  book: {
    title: '',
    price: '',
    description: '',
    authors: [],
    isbn_10: '',
    isbn_13: '',
    condition: '',
    imageUrl: '',
    edition: ''
  },
  editBook: {
    title: '',
    price: '',
    description: '',
    authors: [],
    isbn_10: '',
    isbn_13: '',
    condition: '',
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
    // For UPDATING/EDITING an existing book listing - accessed via the my bookstore (auth) page
    case ADD_EDIT_BOOK:
      return {
        ...state,
        editBook: payload,
        loading: false
      }
    case LOAD_EDIT_BOOK:
      return {
        ...state,
        editBook: payload,
        loading: false
      }
    case UPDATE_EDIT_BOOK:
      return {
        ...state,
        editBook: payload,
        loading: false
      }
    default:
      return state
  }
}
