import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchFavoritesAction, fetchLoginAction, fetchOffersAction } from '../../store/actions/api-actions';
import PrivateRouteLogin from '../private-route-login/private-route-login';
import { getCity, getFavorites, getFilteredOffers, getOffersDataLoadingStatus, getSortType } from '../../store/offers-data/offers-data-selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { getNearPlaces } from '../../store/current-offer-data/curret-offer-data-selectors';
function App(): JSX.Element {

  const filteredOffers = useAppSelector(getFilteredOffers);
  const favoriteOffers = useAppSelector(getFavorites);
  const selectedCity = useAppSelector(getCity);
  const selectedSortType = useAppSelector(getSortType);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const nearPlaces = useAppSelector(getNearPlaces);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, []);

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, []);

  useEffect(() => {
    store.dispatch(fetchLoginAction());
  }, [authorizationStatus]);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage authorizationStatus={authorizationStatus} rentalOffersCount={filteredOffers.length} offers={filteredOffers} selectedCity={selectedCity} selectedSortType={selectedSortType} />} />
            <Route path={AppRoute.Login}
              element={
                <PrivateRouteLogin authorizationStatus={authorizationStatus}>
                  <LoginPage />
                </PrivateRouteLogin>
              }
            />
            <Route path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage offers={favoriteOffers} authorizationStatus={authorizationStatus} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Room} element={<OfferPage offers={nearPlaces} selectedCity={selectedCity} authorizationStatus={authorizationStatus} />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
