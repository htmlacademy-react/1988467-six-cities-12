import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { fakeLogin } from '../../utils/mocks';
import { checkAuthAction, fetchLoginAction, loginAction, logoutAction } from '../actions/api-actions';
import { userProcess } from './user-process-slice';

describe('Reducer: user-process', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = { authorizationStatus: AuthorizationStatus.Unknown, login: '' };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, login: '' });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, login: '' });
    });

    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, login: '' });
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" and update login if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: fakeLogin }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, login: fakeLogin });
    });

    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, login: '' });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, login: '' });
    });
  });

  describe('fetchLoginAction test', () => {
    it('should update login if fetchLoginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: fetchLoginAction.fulfilled.type, payload: fakeLogin }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, login: fakeLogin });
    });
  });
});
