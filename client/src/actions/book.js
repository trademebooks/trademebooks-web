import api from '../utils/api';
import { toastr } from 'react-redux-toastr';
import {
  ADD_BOOK,
  CREATE_BOOK
} from './types';

// Add book
export const addBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData,
  });
};

// Create a book Listing
export const createBook = (book) => async (dispatch) => {
  try {
    await api.post(`/books`, book);

    dispatch({
      type: CREATE_BOOK,
      payload: book
    });

    toastr.success('Book listing created successful');

    dispatch({
      type: ADD_BOOK,
      payload: {
        title: '',
        price: '',
        description: ''
      }
    })
  } catch (err) {
    const data = err.response.data;
    const errors = data.errors;

    if (errors) {
      errors.forEach(errorMessage => {
        toastr.error(errorMessage)
      });
    }
  }
};
