import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import book from "./book";
import account from "./account";
import bookstore from "./bookstore";

export default combineReducers({
  alert,
  auth,
  account,
  book,
  bookstore
});
