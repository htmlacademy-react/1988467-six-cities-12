const RENTAL_OFFERS_COUNT = 312;

const RATINGS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

export const RentalInfo = {
  RentalOffersCount: RENTAL_OFFERS_COUNT,
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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const CLASS_NAME_LIST = {
  mainPage: 'cities',
  offerPage: 'near-places',
};

const MAP_SIZE = {
  mainPage: {
    height: '794px',
    width: '512px',
    margin: '0',
  },
  offerPage: {
    height: '579px',
    width: '1144px',
    margin: '0 auto 50px',
  }
};

export { RATINGS, CLASS_NAME_LIST, MAP_SIZE };
