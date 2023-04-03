import { createReducer } from '@reduxjs/toolkit';
// import { CITIES } from '../../const';
import { offers } from '../../mocks/offers';
import { changeCityAction } from '../actions/actions';

const initialState = {
  city: 'Paris',
  offers: offers,
  filteredOffers: offers.filter((offer) => offer.city === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city === action.payload);
    });
});

export { reducer };
