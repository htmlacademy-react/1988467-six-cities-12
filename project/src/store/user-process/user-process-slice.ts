import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { getToken } from '../../services/token';
import { UserProcess } from '../../types/state';
import { checkAuthAction, fetchLoginAction, loginAction, logoutAction } from '../actions/api-actions';

const token = getToken();

const initialState: UserProcess = {
  authorizationStatus: token ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth,
  login: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.login = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchLoginAction.fulfilled, (state, action) => {
        state.login = action.payload;
      });
  }
});
