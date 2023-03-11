const RENTAL_OFFERS_COUNT = 312;
const PLACE_CARD_COUNT = [1, 2, 3, 4, 5];

export const RentalInfo = {
  RentalOffersCount: RENTAL_OFFERS_COUNT,
  PlaceCardCount: PLACE_CARD_COUNT,
} as const;

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
