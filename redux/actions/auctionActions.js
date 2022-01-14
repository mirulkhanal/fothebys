import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_AUCTIONS_SUCCESS,
  ALL_AUCTIONS_REQUEST,
  ALL_AUCTIONS_FAIL,
  CLEAR_ERRORS,
  GET_ADMIN_AUCTIONS_FAIL,
  GET_ADMIN_AUCTIONS_REQUEST,
  GET_ADMIN_AUCTIONS_SUCCESS,
  CREATE_AUCTION_SUCCESS,
  CREATE_AUCTION_REQUEST,
  CREATE_AUCTION_FAIL,
  UPDATE_AUCTION_SUCCESS,
  UPDATE_AUCTION_REQUEST,
  UPDATE_AUCTION_FAIL,
  AUCTION_DETAILS_SUCCESS,
  AUCTION_DETAILS_FAIL,
} from './actionTypes';

export const getAuctions =
  (req, location = '') =>
  async (dispatch) => {
    dispatch({ type: ALL_AUCTIONS_REQUEST });
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

export const getAllAdminAuctions = () => async (dispatch) => {
  dispatch({
    type: GET_ADMIN_AUCTIONS_REQUEST,
  });
  try {
    const url = `/api/admin/auctions`;

    const { data } = await axios.get(url);
    dispatch({
      type: GET_ADMIN_AUCTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ADMIN_AUCTIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createNewAuction = (auction) => async (dispatch) => {
  dispatch({
    type: CREATE_AUCTION_REQUEST,
  });
  try {
    const url = `/api/auction/`;

    const { data } = await axios.post(url, auction);

    dispatch({
      type: CREATE_AUCTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AUCTION_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updateAuction = (id, auction) => async (dispatch) => {
  dispatch({
    type: UPDATE_AUCTION_REQUEST,
  });
  try {
    const url = `/api/auction/${id}`;

    const { data } = await axios.put(url, auction);

    dispatch({
      type: UPDATE_AUCTION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AUCTION_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getAuctionDetails = (id) => async (dispatch) => {
  try {
    let url = `/api/auction/${id}`;

    const { data } = await axios.get(url);

    dispatch({
      type: AUCTION_DETAILS_SUCCESS,
      payload: data.auction,
    });
  } catch (error) {
    dispatch({
      type: AUCTION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
