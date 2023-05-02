import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLoginAction, logoutAction } from '../../store/actions/api-actions';
import { getAuthorizationStatus, getLogin } from '../../store/user-process/user-process-selectors';
import { getFavorites } from '../../store/offers-data/offers-data-selectors';
import { useEffect } from 'react';

function Authorization(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginEmail = useAppSelector(getLogin);
  const favoriteOffers = useAppSelector(getFavorites);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && !loginEmail) {
      dispatch(fetchLoginAction());
    }
  }, [dispatch, authorizationStatus, loginEmail]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{loginEmail}</span>
            <span className="header__favorite-count">{favoriteOffers.length}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Main}>
            <span className="header__signout"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >Sign out
            </span>
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

export default Authorization;
