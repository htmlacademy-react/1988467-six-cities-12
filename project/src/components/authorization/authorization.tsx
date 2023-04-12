import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type AuthorizationProps = {
  authorizationStatus: AuthorizationStatus;
}

function Authorization({authorizationStatus}: AuthorizationProps): JSX.Element {
  const loginEmail = useAppSelector((state) => state.login);

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="/">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{loginEmail}</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/login">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </a>
      </li>
    </ul>
  );
}

export default Authorization;
