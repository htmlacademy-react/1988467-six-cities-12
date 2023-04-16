import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { loadOffersAction, setOffersDataLoadingStatusAction, changeCityAction, requireAuthorizationAction, setErrorAction, saveLoginAction, loadCommentsAction, loadSelectedOfferAction, loadNearPlacesAction } from './actions';
import { AuthData } from '../../types/auth-data';
import { AuthInfo } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { store } from '..';
import { NewComment, Review } from '../../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatusAction(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatusAction(false));
    dispatch(loadOffersAction(data));
    dispatch(changeCityAction('Paris'));
  }
);

export const fetchSelectedOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSelectedOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer>(`/hotels/${id}`);
    dispatch(loadSelectedOfferAction(data));
  }
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`/comments/${id}`);
    dispatch(loadCommentsAction(data));
  }
);

export const fetchNearPlacesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearPlaces',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`/hotels/${id}/nearby`);
    dispatch(loadNearPlacesAction(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    }
    catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<AuthInfo>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(saveLoginAction(email));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

type NewCommentParams = NewComment & { onSuccess(): void; onError(): void }

export const sendNewCommentAction = createAsyncThunk<void, NewCommentParams, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendNewComment',
  async ({ comment, rating, offerId, onSuccess, onError }, { extra: api }) => {
    try {
      await api.post<NewComment>(`/comments/${offerId}`, { comment, rating });
      onSuccess();
    } catch (e) {
      onError();
    }
  }
);
