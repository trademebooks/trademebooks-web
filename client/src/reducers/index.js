import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import book from './book';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
  alert,
  toastr: toastrReducer,
  auth,
  book,
});
