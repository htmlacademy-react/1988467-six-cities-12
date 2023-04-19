import { AuthorizationStatus } from '../../const';
import { getToken } from '../../services/token';
import { UserProcess } from '../../types/state';

const token = getToken();

const initialState: UserProcess = {
  authorizationStatus: token ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth,
  login: null,
};


