import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      console.log("state", state);
      console.log("action", action);
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
