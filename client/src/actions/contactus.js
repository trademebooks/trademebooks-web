import api from "../utils/api";
import {CONTACT_US, CONTACT_US_FAIL} from "./types";
import {setAlert} from "./alert";

export const contactUs = (name, email, body) => async dispatch => {
  const body = {name, email, body};

  try {
    const res = await api.post('/api/v1/utilities/contact', body);
    dispatch({
      type: CONTACT_US,
      payload: res.data
    });

  } catch (err) {
    const data = err.response.data;
    const errors = data.errors;

    if (errors) {
      errors.forEach(errorMessage => {
        dispatch(setAlert(errorMessage, 'danger'))
      });
    }

    dispatch({
      type: CONTACT_US_FAIL
    });
  }
};
