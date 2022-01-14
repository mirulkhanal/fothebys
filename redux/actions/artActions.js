import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_ARTS_SUCCESS,
  ALL_ARTS_FAIL,
  CLEAR_ERRORS,
  CREATE_ART_SUCCESS,
  CREATE_ART_FAIL,
  CREATE_ART_REQUEST,
  UPDATE_ART_SUCCESS,
  UPDATE_ART_FAIL,
  UPDATE_ART_REQUEST,
  ART_DETAILS_SUCCESS,
  ART_DETAILS_FAIL,
  ALL_ARTS_REQUEST,
  ALL_ADMIN_ARTS_SUCCESS,
  ALL_ADMIN_ARTS_FAIL,
} from '../actions/actionTypes';

export const getArts =
  (title = '', artist_name = '', price = '') =>
  async (dispatch) => {
    dispatch({ type: ALL_ARTS_REQUEST });
    // const origin = absoluteUrl(req);
    try {
      let link = `http://localhost:3000/api/art/?`;
      if (artist_name) {
        link = link.concat(`&artist_name=${artist_name}`);
      }
      if (title) {
        link = link.concat(`&title=${title}`);
      }
      if (price) {
        link = link.concat(`&price=${price}`);
      }

      const { data } = await axios.get(link);
      dispatch({
        type: ALL_ARTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.debug(error);
      dispatch({
        type: ALL_ARTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getAdminArts = () => async (dispatch) => {
  try {
    let link = 'http://localhost:3000/api/admin/art/';
    const { data } = await axios.get(link);
    dispatch({
      type: ALL_ADMIN_ARTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ADMIN_ARTS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Get art details
export const getArtDetails = (id) => async (dispatch) => {
  try {
    let url = `/api/art/${id}`;

    const { data } = await axios.get(url);

    dispatch({
      type: ART_DETAILS_SUCCESS,
      payload: data.art,
    });
  } catch (error) {
    dispatch({
      type: ART_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createNewArt = (art) => async (dispatch) => {
  dispatch({
    type: CREATE_ART_REQUEST,
  });
  try {
    const url = `/api/admin/art`;

    const { data } = await axios.post(url, art);

    dispatch({
      type: CREATE_ART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ART_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updateArt = (id, art) => async (dispatch) => {
  dispatch({
    type: UPDATE_ART_REQUEST,
  });
  try {
    const url = `/api/art/${id}`;

    const { data } = await axios.put(url, art, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: UPDATE_ART_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ART_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
