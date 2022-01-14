import {
  ALL_AUCTIONS_REQUEST,
  ALL_AUCTIONS_SUCCESS,
  ALL_AUCTIONS_FAIL,
  CLEAR_ERRORS,
  GET_ADMIN_AUCTIONS_FAIL,
  GET_ADMIN_AUCTIONS_REQUEST,
  GET_ADMIN_AUCTIONS_SUCCESS,
  CREATE_AUCTION_SUCCESS,
  CREATE_AUCTION_REQUEST,
  CREATE_AUCTION_FAIL,
  CREATE_AUCTION_RESET,
  UPDATE_AUCTION_SUCCESS,
  UPDATE_AUCTION_REQUEST,
  UPDATE_AUCTION_FAIL,
  UPDATE_AUCTION_RESET,
  AUCTION_DETAILS_SUCCESS,
  AUCTION_DETAILS_FAIL,
} from '../actions/actionTypes';

export const allAuctionsReducer = (state = { auctions: [] }, action) => {
  switch (action.type) {
    case ALL_AUCTIONS_REQUEST:
    case GET_ADMIN_AUCTIONS_REQUEST:
      return {
        loading: true,
      };

    case ALL_AUCTIONS_SUCCESS:
    case GET_ADMIN_AUCTIONS_SUCCESS:
      return {
        loading: false,
        auctions: action.payload.auctions,
      };

    case ALL_AUCTIONS_FAIL:
    case GET_ADMIN_AUCTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newAuctionReducer = (state = { auction: {} }, action) => {
  switch (action.type) {
    case CREATE_AUCTION_REQUEST:
      return {
        loading: true,
      };
    case CREATE_AUCTION_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        auction: action.payload.auction,
      };
    case CREATE_AUCTION_RESET:
      return {
        loading: false,
        success: false,
      };

    case CREATE_AUCTION_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const updateAuctionReducer = (state = { auction: {} }, action) => {
  switch (action.type) {
    case UPDATE_AUCTION_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_AUCTION_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case UPDATE_AUCTION_RESET:
      return {
        success: false,
      };

    case UPDATE_AUCTION_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const auctionDetailsReducer = (state = { auction: {} }, action) => {
  switch (action.type) {
    case AUCTION_DETAILS_SUCCESS:
      return {
        auction: action.payload,
      };

    case AUCTION_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// 