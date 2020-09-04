import {
  UPDATE_USERNAME,
  UPDATE_SCHOOL,
  UPDATE_LOCATION,
  UPDATE_ERROR,
} from "./types";

export const updateUsername = (username) => async (dispatch) => {
  console.log("Got to update username action, username: ", username);
  try {
    dispatch({
      type: UPDATE_USERNAME,
      payload: username,
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
    dispatch({
      type: UPDATE_SCHOOL,
      payload: school,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateLocation = (location) => async (dispatch) => {
  console.log("Got to update location action, location: ", location);
  try {
    dispatch({
      type: UPDATE_LOCATION,
      payload: location,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
