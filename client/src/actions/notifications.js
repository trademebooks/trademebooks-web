import {
  UPDATE_RECEIVE_EMAILS,
  UPDATE_RECEIVE_TEXTS,
  UPDATE_ERROR,
} from "./types";

export const updateReceiveEmails = (receive) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_RECEIVE_EMAILS,
      payload: receive,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateReceiveTexts = (receive) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_RECEIVE_TEXTS,
      payload: receive,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
