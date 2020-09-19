import {
  GET_BOOKS,
  GET_BOOK,
  ADD_BOOK
} from '../actions/types';

const initialState = {
  books: [],
  book: {
    name: ''
  },
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_BOOK:
      return {
        ...state,
        book: payload,
        loading: false
      };
    case ADD_BOOK:
      return {
        ...state,
        book: payload,
        loading: false
      };
    default:
      return state;
  }
}
