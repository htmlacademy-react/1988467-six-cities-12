import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../../mocks/offers';
import { changeCityAction, changeSortTypeAction } from '../actions/actions';
import { SORT_TYPE_ACTIONS } from '../../const';
import { Offer } from '../../types/offer';
import { CityFilter } from '../../types/city';
import { OfferSortType } from '../../types/sort';

const initialState = {
  city: 'Paris' as CityFilter,
  offers,
  filteredOffers: offers.filter((offer) => offer.city === 'Paris'),
  sortType: 'sortPopular' as OfferSortType,
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
      state.filteredOffers = state.offers.filter((offer) => offer.city === action.payload);
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.sortType = action.payload;
      const offersFilteredByCity = state.offers.filter((offer) => offer.city === state.city);
      state.filteredOffers = sortOffers(offersFilteredByCity, action.payload);
    });
});

export { reducer };
