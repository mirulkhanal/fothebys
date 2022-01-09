import { combineReducers } from 'redux';

import { allArtsReducer, artDetailsReducer } from './artReducers';
import { allAuctionsReducer, artsFromAuctionReducer } from './auctionReducers';
import { authReducer } from './userReducers';

const reducers = combineReducers({
  allArts: allArtsReducer,
  artDetails: artDetailsReducer,
  allAuctions: allAuctionsReducer,
  artsFromAuction: artsFromAuctionReducer,
  auth: authReducer,
});

export default reducers;
