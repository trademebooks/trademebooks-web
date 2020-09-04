import api from "../utils/api";
import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_BOOKSTORE,
  UPDATE_NOTIFICATIONS,
  UPDATE_ERROR,
} from "./types";

export const updateEmail = (formData) => (dispatch) => {
  console.log("Got to update email action");
  //   return {
  //     type: UPDATE_EMAIL,
  //     payload: email,
  //   };
  try {
    dispatch({
      type: UPDATE_EMAIL,
      payload: formData.email,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
