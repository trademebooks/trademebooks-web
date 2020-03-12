import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  form: reduxForm
});
