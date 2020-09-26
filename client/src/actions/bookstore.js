import api from "../utils/api";
import {
  UPDATE_USERNAME,
  UPDATE_SCHOOL,
  UPDATE_LOCATION,
  UPDATE_ERROR,
} from "./types";

export const updateUsername = (username) => async (dispatch) => {
  console.log("Got to update username action, username: ", username);
  try {
    const res = await api.put("/bookstore/", {username});

    dispatch({
      type: UPDATE_USERNAME,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateSchool = (school) => async (dispatch) => {
  console.log("Got to update school action, school: ", school);
  try {
    const res = await api.put("/bookstores/", {school});

    dispatch({
      type: UPDATE_SCHOOL,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateLocation = (location) => async (dispatch) => {
  console.log("Got to update location action, location: ", {location});
  try {
    const res = await api.put("/bookstore/", location);

    dispatch({
      type: UPDATE_LOCATION,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
