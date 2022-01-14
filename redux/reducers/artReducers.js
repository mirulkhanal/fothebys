import {
  ALL_ARTS_SUCCESS,
  ALL_ARTS_FAIL,
  ART_DETAILS_SUCCESS,
  ART_DETAILS_FAIL,
  ALL_ADMIN_ARTS_REQUEST,
  ALL_ADMIN_ARTS_SUCCESS,
  ALL_ADMIN_ARTS_FAIL,
  CLEAR_ERRORS,
  CREATE_ART_SUCCESS,
  CREATE_ART_FAIL,
  CREATE_ART_REQUEST,
  CREATE_ART_RESET,
  UPDATE_ART_SUCCESS,
  UPDATE_ART_FAIL,
  UPDATE_ART_REQUEST,
  UPDATE_ART_RESET,
} from '../actions/actionTypes';

export const allArtsReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case ALL_ADMIN_ARTS_SUCCESS:
    case ALL_ARTS_SUCCESS:
      return {
        arts: action.payload.arts,
      };
    case ALL_ADMIN_ARTS_FAIL:
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

export const newArtReducer = (state = { art: {} }, action) => {
  switch (action.type) {
    case CREATE_ART_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ART_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        art: action.payload.art,
      };
    case CREATE_ART_RESET:
      return {
        loading: false,
        success: false,
      };

    case CREATE_ART_FAIL:
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

export const updateArtReducer = (state = { art: {} }, action) => {
  switch (action.type) {
    case UPDATE_ART_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_ART_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case UPDATE_ART_RESET:
      return {
        success: false,
      };

    case UPDATE_ART_FAIL:
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
