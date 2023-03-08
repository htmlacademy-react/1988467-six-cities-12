import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const RENTAL_OFFERS_COUNT = 312;
const PLACE_CARD_COUNT = [1, 2, 3, 4, 5];

const RentalInfo = {
  RentalOffersCount: RENTAL_OFFERS_COUNT,
  PlaceCardCount: PLACE_CARD_COUNT,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={RentalInfo.RentalOffersCount}
      placeCardCount={RentalInfo.PlaceCardCount}
    />
  </React.StrictMode>,
);
