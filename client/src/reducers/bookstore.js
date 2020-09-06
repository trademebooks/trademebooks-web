import {
  UPDATE_USERNAME,
  UPDATE_SCHOOL,
  UPDATE_LOCATION,
  UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  username: null,
  location: null,
  school: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case UPDATE_SCHOOL:
      return {
        ...state,
        school: payload,
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
