import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppScreenProps = {
  rentalOffersCount: number;
  placeCardCount: number[];
}

function App({ rentalOffersCount, placeCardCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage rentalOffersCount={rentalOffersCount} placeCardCount={placeCardCount} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='offer/:id' element={<OfferPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
