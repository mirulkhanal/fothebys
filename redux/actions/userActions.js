import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  CLEAR_ERRORS,
} from '../actions/actionTypes';

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const link = `${origin}/api/auth/register`;
    await axios.post(link, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const getAuthUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const link = `/api/me`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
