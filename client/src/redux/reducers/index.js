import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import conversationState from "./conversationsReducer";

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  form: reduxForm,
  conversationState,
});
