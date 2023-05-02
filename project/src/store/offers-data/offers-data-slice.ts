import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OffersData } from '../../types/state';
import { NameSpace, SORT_TYPE_ACTIONS } from '../../const';
import { fetchFavoritesAction, fetchOffersAction } from '../actions/api-actions';
import { Offer } from '../../types/offer';
import { OfferSortType } from '../../types/sort';
import { CityFilter } from '../../types/city';

const initialState: OffersData = {
  city: 'Paris',
  offers: [],
  filteredOffers: [],
  sortType: 'sortPopular',
  hasError: false,
  isOffersDataLoading: false,
  favorites: [],
};

export const sortOffers = (filteredOffers: Offer[], sortType: OfferSortType): Offer[] => {
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

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<CityFilter>) => {
      state.city = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city?.name === action.payload);
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    },
    changeSortTypeAction: (state, action: PayloadAction<OfferSortType>) => {
      state.sortType = action.payload;

      const offersFilteredByCity = state.offers.filter((offer) => offer.city?.name === state.city);
      state.filteredOffers = sortOffers(offersFilteredByCity, action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
        state.hasError = false;
        state.filteredOffers = state.offers.filter((offer) => offer.city?.name === state.city);
        state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});

export const { changeCityAction, changeSortTypeAction } = offersData.actions;
