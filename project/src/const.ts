import { City, CityFilter } from './types/city';
import { Offer } from './types/offer';

const RENTAL_OFFERS_COUNT = 312;

const TIMEOUT_SHOW_ERROR = 2000;

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
  './img/pin.svg';

export const URL_MARKER_CURRENT =
  './img/pin-active.svg';

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

const CITIES: CityFilter[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const SORT_TYPE_ACTIONS = [
  {
    sortType: 'sortPopular',
    title: 'Popular',
  },
  {
    sortType: 'sortPriceDesc',
    getSortedOffers: (offerA: Offer, offerB: Offer): number => +offerB.price - +offerA.price,
    title: 'Price: high to low',
  },
  {
    sortType: 'sortPriceAsc',
    getSortedOffers: (offerA: Offer, offerB: Offer): number => +offerA.price - +offerB.price,
    title: 'Price: low to high',
  },
  {
    sortType: 'sortRatingDesc',
    getSortedOffers: (offerA: Offer, offerB: Offer): number => offerB.rating - +offerA.rating,
    title: 'Top rated first',
  },
];

export enum APIRoute {
  Offers = '/hotels',
  SelectedOffer = '/hotels/{hotelId}',
  Login = '/login',
  Logout = '/logout',
}

export const CITIES_DATA: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85341,
      longitude: 2.34880,
      zoom: 11,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 11,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 11,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 11,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 11,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 11,
    }
  }
];

export { RATINGS, CLASS_NAME_LIST, MAP_SIZE, CITIES, SORT_TYPE_ACTIONS, TIMEOUT_SHOW_ERROR };
