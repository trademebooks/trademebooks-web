import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_BOOKSTORE,
  UPDATE_NOTIFICATIONS,
  UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  email: null,
  password: null,
};

export default function (state = initialState, action) {
  console.log("Got to account reducer, action: ", action);
  const { type, payload } = action;

  switch (type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        loading: false,
        email: payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        loading: false,
        password: payload,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
