import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import auth from './auth'
import book from './book'
import bookstore from './bookstore'

export default combineReducers({
  toastr: toastrReducer,
  auth,
  book,
  bookstore
})
