import api from '../utils/api';

import {
  GET_PROFILE,
  PROFILE_ERROR,
} from './types';

export const getBookstoreByUsername = (username) => async dispatch => {
  try {
    const res = await api.get(`/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
