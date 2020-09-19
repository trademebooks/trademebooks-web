import api from '../utils/api';
import { setAlert } from './alert';
import {
  ADD_BOOK,
  CREATE_BOOK,
  POST_ERROR
} from './types';

// Add book
export const addBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData,
  });
};

// Create post
export const createBook = (book) => async (dispatch) => {
  try {
    await api.post(`/books`, book);

    dispatch({
      type: CREATE_BOOK,
      payload: book
    });

    dispatch(setAlert('Book listing created successful', 'success'));
  } catch (err) {
    const data = err.response.data;
    const errors = data.errors;

    if (errors) {
      errors.forEach(errorMessage => {
        dispatch(setAlert(errorMessage, 'danger'))
      });
    }

    dispatch({
      type: POST_ERROR
    });
  }
};
