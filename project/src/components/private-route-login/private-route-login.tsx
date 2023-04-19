import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteLoginProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRouteLogin(props: PrivateRouteLoginProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> : children
  );
}

export default PrivateRouteLogin;
