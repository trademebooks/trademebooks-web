import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_ERROR } from "./types";

export const updateEmail = (email) => async (dispatch) => {
  console.log("Got to update email action, email: ", email);
  try {
    dispatch({
      type: UPDATE_EMAIL,
      payload: email,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updatePassword = (password) => async (dispatch) => {
  console.log("Got to update email action, password: ", password);
  try {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: password,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
