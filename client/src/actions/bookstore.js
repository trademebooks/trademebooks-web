import api from '../utils/api';

import {
  GET_PROFILE
} from './types';

export const getBookstoreByUsername = (username) => async dispatch => {
  try {
    const res = await api.get(`/bookstores/${username}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    console.log({ error })
  }
};
