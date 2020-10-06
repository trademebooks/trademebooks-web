import api from '../utils/api';

import { GET_BOOKSTORE } from './types';

export const getBookstoreByUsername = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/bookstores/${username}`);

    dispatch({
      type: GET_BOOKSTORE,
      payload: res.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
