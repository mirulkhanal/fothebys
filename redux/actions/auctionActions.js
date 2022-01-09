import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_AUCTIONS_SUCCESS,
  ALL_AUCTIONS_FAIL,
  ALL_ARTS_FROM_AUCTION_SUCCESS,
  ALL_ARTS_FROM_AUCTION_FAIL,
  CLEAR_ERRORS,
} from './actionTypes';

export const getAuctions =
  (req, location = '') =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      let link;
      if (location) {
        link = `${origin}/api/auction/?location=${location}`;
      } else {
        link = `${origin}/api/auction`;
      }

      const { data } = await axios.get(link);
      dispatch({
        type: ALL_AUCTIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_AUCTIONS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getAuctionArts = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const url = `${origin}/api/auction/${id}/arts`;

    const { data } = await axios.get(url);

    dispatch({
      type: ALL_ARTS_FROM_AUCTION_SUCCESS,
      payload: data.arts,
    });
  } catch (error) {
    dispatch({
      type: ALL_ARTS_FROM_AUCTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
