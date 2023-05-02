import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { useAppSelector } from '../../hooks';

type PrivateRouteLoginProps = {
  children: JSX.Element;
}

function PrivateRouteLogin(props: PrivateRouteLoginProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> : children
  );
}

export default PrivateRouteLogin;
