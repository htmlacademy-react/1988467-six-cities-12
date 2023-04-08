import { createAction } from '@reduxjs/toolkit';
import { OfferSortType } from '../../types/sort';
import { CityFilter } from '../../types/city';

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
