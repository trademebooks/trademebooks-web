import { combineReducers } from 'redux'
import alert from './alert'
import { reducer as toastrReducer } from 'react-redux-toastr'

import auth from './auth'
import book from './book'
import bookstore from './bookstore'
import chatUser from './chatUser'

export default combineReducers({
  alert,
  toastr: toastrReducer,
  auth,
  book,
  bookstore,
  chatUser
})
