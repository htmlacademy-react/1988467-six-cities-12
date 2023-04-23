import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { APIRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { AuthInfo } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { NewComment, Review } from '../../types/review';
import { changeCityAction } from '../offers-data/offers-data-slice';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(changeCityAction('Paris'));
    return data;
  }
);

export const fetchSelectedOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSelectedOffer',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer>(`/hotels/${id}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`/comments/${id}`);
    return data;
  }
);

export const fetchNearPlacesAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearPlaces',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`/hotels/${id}/nearby`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  }
);

export const fetchLoginAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchLogin',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AuthInfo>(APIRoute.Login);
    return data.email;
  }
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({ login: email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<AuthInfo>(APIRoute.Login, { email, password });
    saveToken(token);
    return email;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

type NewCommentParams = NewComment & { onSuccess(): void }

export const sendNewCommentAction = createAsyncThunk<void, NewCommentParams, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendNewComment',
  async ({ comment, rating, offerId, onSuccess }, { extra: api }) => {
    await api.post<NewComment>(`/comments/${offerId}`, { comment, rating });
    onSuccess();
  }
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorites);
    return data;
  }
);

type FavoriteStatusParams = { favoriteStatus: number; id: number };

export const sendFavoriteStatusAction = createAsyncThunk<void, FavoriteStatusParams, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendFavoriteStatus',
  async ({ favoriteStatus, id, }, { dispatch, extra: api }) => {
    await api.post<Offer>(`/favorite/${id}/${favoriteStatus}`);
    dispatch(fetchFavoritesAction());
  }
);
