import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { APIRoute } from '../../const';
import { loadOffersAction, setOffersDataLoadingStatusAction, changeCityAction } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatusAction(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatusAction(false));
    dispatch(loadOffersAction(data));
    dispatch(changeCityAction('Paris'));
  }
);
