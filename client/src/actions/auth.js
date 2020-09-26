import { toastr } from 'react-redux-toastr';
import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth/user');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const register = formData => async dispatch => {
  try {
    const res = await api.post('/auth/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    toastr.success('You have successfully registered! Try logging in now!');
  } catch (err) {
    const data = err.response.data;
    const errors = data.errors;

    if (errors) {
      errors.forEach(errorMessage => {
        dispatch(setAlert(errorMessage, 'danger'))
      });
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const login = (email, password) => async dispatch => {
  const body = { email, password };

  try {
    const res = await api.post('/auth/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    toastr.success('Welcome. You have logged in!')
  } catch (err) {
    const data = err.response.data;
    const errors = data.errors;

    if (errors) {
      errors.forEach(errorMessage => {
        dispatch(setAlert(errorMessage, 'danger'))
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => async dispatch => {
  try {
    await api.get('/auth/logout');

    dispatch({ type: LOGOUT });

    dispatch(loadUser());

    toastr.success('You have logged out.')
  } catch (err) {
    console.log('actions/auth.js', err)
  }
};
