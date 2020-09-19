import api from '../utils/api';
import { setAlert } from './alert';
import {
  ADD_BOOK,
  GET_BOOK,
  GET_BOOKS,
  DELETE_BOOK,
  POST_ERROR
} from './types';

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/posts');

    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getBook = () => async (dispatch) => {
  // dispatch({
  //   type: GET_BOOK,
  //   payload: res.data,
  // });
};

// Add post
export const addBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: formData,
  });
};

// Delete post
export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_BOOK,
      payload: id,
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
