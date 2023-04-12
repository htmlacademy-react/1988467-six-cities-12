import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App(): JSX.Element {

  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const allOffers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.city);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const comments = useAppSelector((state) => state.comments);

  if(isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage authorizationStatus={authorizationStatus} rentalOffersCount={filteredOffers.length} offers={filteredOffers} selectedCity={selectedCity} selectedSortType={selectedSortType} />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage offers={allOffers} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Room} element={<OfferPage offers={filteredOffers} selectedCity={selectedCity} comments={comments}/>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
