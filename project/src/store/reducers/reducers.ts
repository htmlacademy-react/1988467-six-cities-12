import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, changeSortTypeAction, loadCommentsAction, loadNearPlacesAction, loadOffersAction, loadSelectedOfferAction, requireAuthorizationAction, saveLoginAction, setErrorAction, setOffersDataLoadingStatusAction } from '../actions/actions';
import { AuthorizationStatus, SORT_TYPE_ACTIONS } from '../../const';
import { Offer } from '../../types/offer';
import { CityFilter } from '../../types/city';
import { OfferSortType } from '../../types/sort';
import { Review } from '../../types/review';
import { getToken } from '../../services/token';

const token = getToken();

type InitialState = {
  city: CityFilter;
  offers: Offer[];
  filteredOffers: Offer[];
  sortType: OfferSortType;
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  login: string | null;
  comments: Review[];
  selectedOffer: Offer | null;
  nearPlaces: Offer[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  filteredOffers: [],
  sortType: 'sortPopular',
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: token ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth,
  login: null,
  comments: [],
  selectedOffer: null,
  nearPlaces: [],
};

const sortOffers = (filteredOffers: Offer[], sortType: OfferSortType): Offer[] => {
  const currentSortType = SORT_TYPE_ACTIONS.find((type) => type.sortType === sortType);

  switch (sortType) {
    case 'sortPopular':
      return filteredOffers;
    case 'sortPriceAsc':
    case 'sortPriceDesc':
    case 'sortRatingDesc':
      return filteredOffers.sort(currentSortType?.getSortedOffers);
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city?.name === action.payload);
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.sortType = action.payload;
      const offersFilteredByCity = state.offers.filter((offer) => offer.city?.name === state.city);
      state.filteredOffers = sortOffers(offersFilteredByCity, action.payload);
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatusAction, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveLoginAction, (state, action) => {
      state.login = action.payload;
    })
    .addCase(loadCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSelectedOfferAction, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadNearPlacesAction, (state, action) => {
      state.nearPlaces = action.payload;
    });
});

export { reducer };
