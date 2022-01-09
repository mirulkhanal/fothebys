import {
  ALL_ARTS_SUCCESS,
  ALL_ARTS_FAIL,
  ART_DETAILS_SUCCESS,
  ART_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../actions/actionTypes';

export const allArtsReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case ALL_ARTS_SUCCESS:
      return {
        arts: action.payload.arts,
      };

    case ALL_ARTS_FAIL:
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

// art details reducer
export const artDetailsReducer = (state = { art: {} }, action) => {
  switch (action.type) {
    case ART_DETAILS_SUCCESS:
      return {
        art: action.payload,
      };

    case ART_DETAILS_FAIL:
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
