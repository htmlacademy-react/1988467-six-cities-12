import { NameSpace } from '../../const';
import { CityFilter } from '../../types/city';
import { Offer } from '../../types/offer';
import { OfferSortType } from '../../types/sort';
import { State } from '../../types/state';

export const getCity = (state: State): CityFilter => state[NameSpace.OffersData].city;
export const getOffers = (state: State): Offer[] => state[NameSpace.OffersData].offers;
export const getFilteredOffers = (state: State): Offer[] => state[NameSpace.OffersData].filteredOffers;
export const getSortType = (state: State): OfferSortType => state[NameSpace.OffersData].sortType;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.OffersData].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.OffersData].hasError;
