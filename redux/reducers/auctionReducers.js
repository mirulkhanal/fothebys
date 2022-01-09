import {
  ALL_AUCTIONS_SUCCESS,
  ALL_AUCTIONS_FAIL,
  CLEAR_ERRORS,
  ALL_ARTS_FROM_AUCTION_SUCCESS,
  ALL_ARTS_FROM_AUCTION_FAIL,
} from '../actions/actionTypes';

export const allAuctionsReducer = (state = { auctions: [] }, action) => {
  switch (action.type) {
    case ALL_AUCTIONS_SUCCESS:
      return {
        auctions: action.payload.auctions,
      };

    case ALL_AUCTIONS_FAIL:
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

export const artsFromAuctionReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case ALL_ARTS_FROM_AUCTION_SUCCESS:
      return {
        arts: action.payload,
      };

    case ALL_ARTS_FROM_AUCTION_FAIL:
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
