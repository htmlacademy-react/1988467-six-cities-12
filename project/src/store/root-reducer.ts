import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process-slice';
import { offersData } from './offers-data/offers-data-slice';
import { currentOfferData } from './current-offer-data/current-offer-data-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.OffersData]: offersData.reducer,
  [NameSpace.CurrentOfferData]: currentOfferData.reducer,
});
