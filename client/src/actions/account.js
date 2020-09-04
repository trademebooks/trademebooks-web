import api from "../utils/api";
import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_BOOKSTORE,
  UPDATE_NOTIFICATIONS,
  UPDATE_ERROR,
} from "./types";

export const updateEmail = (email) => async (dispatch) => {
  console.log("Got to update email action, formData: ", email);
  //   return {
  //     type: UPDATE_EMAIL,
  //     payload: email,
  //   };
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
