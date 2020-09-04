import {
  UPDATE_RECEIVE_EMAILS,
  UPDATE_RECEIVE_TEXTS,
  UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  receiveEmails: false,
  receiveTexts: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_RECEIVE_EMAILS:
      return {
        ...state,
        receiveEmails: payload,
      };
    case UPDATE_RECEIVE_TEXTS:
      return {
        ...state,
        receiveTexts: payload,
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
