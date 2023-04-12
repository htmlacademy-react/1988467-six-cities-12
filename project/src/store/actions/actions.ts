import { createAction } from '@reduxjs/toolkit';
import { OfferSortType } from '../../types/sort';
import { CityFilter } from '../../types/city';
import { Offer } from '../../types/offer';
import { AuthorizationStatus } from '../../const';
import { Review } from '../../types/review';

export const changeCityAction = createAction('changeCity', (selectedCity: CityFilter) => (
  {
    payload: selectedCity,
  }
));

export const changeSortTypeAction = createAction('changeSortType', (selectedSortType: OfferSortType) => (
  {
    payload: selectedSortType,
  }
));

export const loadOffersAction = createAction<Offer[]>('loadOffers');

export const setErrorAction = createAction<string | null>('setError');

export const setOffersDataLoadingStatusAction = createAction<boolean>('setOffersDataLoadingStatus');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');

export const saveLoginAction = createAction<string>('saveLogin');

export const loadCommentsAction = createAction<Review[]>('loadComments');
