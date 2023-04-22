import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { CityFilter } from './city';
import { Offer } from './offer';
import { Review } from './review';
import { OfferSortType } from './sort';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  login: string | null;
}

export type OffersData = {
  city: CityFilter;
  offers: Offer[];
  filteredOffers: Offer[];
  sortType: OfferSortType;
  hasError: boolean;
  isOffersDataLoading: boolean;
  favorites: Offer[];
}

export type CurrentOfferData = {
  comments: Review[];
  selectedOffer: Offer | null;
  nearPlaces: Offer[];
}
