import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_ARTS_SUCCESS,
  ALL_ARTS_FAIL,
  ART_DETAILS_SUCCESS,
  ART_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../actions/actionTypes';

export const getArts =
  (req, page = 1) =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      let link = `${origin}/api/art?page=${page}`;

      const { data } = await axios.get(link);
      dispatch({
        type: ALL_ARTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_ARTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get art details
export const getArtDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    let url;

    if (req) {
      url = `${origin}/api/art/${id}`;
    } else {
      url = `/api/art/${id}`;
    }

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

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
