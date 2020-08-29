import api from "../utils/api";
import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_BOOKSTORE,
  UPDATE_NOTIFICATIONS,
  UPDATE_ERROR
} from "./types";

export const updateEmail = (userId, email) => dispatch => {
    try {
        const res = await api.get(`/profile/user/${userId}`);

        dispatch({
            type: UPDATE_EMAIL,
            payload: res.data
          });
    } catch (err) {
        dispatch({
            type: UPDATE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}