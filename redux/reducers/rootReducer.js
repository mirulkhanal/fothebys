import { combineReducers } from 'redux';

import {
  allArtsReducer,
  artDetailsReducer,
  newArtReducer,
  updateArtReducer,
} from './artReducers';
import {
  allAuctionsReducer,
  artsFromAuctionReducer,
  auctionDetailsReducer,
  newAuctionReducer,
  updateAuctionReducer,
  addArtsToAuctionReducer,
} from './auctionReducers';
import { authReducer, getAuthUserReducer } from './userReducers';

const reducers = combineReducers({
  allArts: allArtsReducer,
  artDetails: artDetailsReducer,
  allAuctions: allAuctionsReducer,
  authUser: getAuthUserReducer,
  newAuction: newAuctionReducer,
  newArt: newArtReducer,
  auth: authReducer,
  auction: updateAuctionReducer,
  updateArt: updateArtReducer,
  auctionDetails: auctionDetailsReducer,
});

export default reducers;
