import { CITIES, SORT_TYPE_ACTIONS } from '../const';
import { OfferSortType } from '../types/sort';
import { mockOffers } from './mock-offers';
import { internet } from 'faker';

export const makeSelectedCity = () => {
  const index = Math.floor(Math.random() * (CITIES.length - 0)) + 0;
  return CITIES[index];
};

export const makeSelectedSortType = () => {
  const index = Math.floor(Math.random() * (SORT_TYPE_ACTIONS.length - 0)) + 0;
  return SORT_TYPE_ACTIONS[index].sortType as OfferSortType;
};

export const getFavoriteOffers = () => mockOffers.filter((offer) => offer.isFavorite === true);

export const fakeLogin: string = internet.email();

export const getCurrentOffer = () => {
  const index = Math.floor(Math.random() * (mockOffers.length - 0)) + 0;
  return mockOffers[index];
};

export const makeNearPlaces = () => {
  const index1 = Math.floor(Math.random() * (mockOffers.length - 0)) + 0;
  const index2 = Math.floor(Math.random() * (mockOffers.length - 0)) + 0;
  return [mockOffers[index1], mockOffers[index2]];
};
