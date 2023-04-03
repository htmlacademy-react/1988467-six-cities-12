import { createAction } from '@reduxjs/toolkit';

export const changeCityAction = createAction('changeCity', (selectedCity: string) => (
  {
    payload: selectedCity,
  }
));
