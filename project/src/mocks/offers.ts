import { Offer } from '../types/offer';
import { CITIES_DATA } from './cities';
import { reviews } from './reviews';

const OFFER_IMG_URL = 'https://loremflickr.com/248/152?random=';
const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offer[] = [
  {
    id: 1,
    city: CITIES_DATA.find((cityToFind) => cityToFind.name === 'Paris'),
    images: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    previewImage: `${OFFER_IMG_URL}${Math.random()}`,
    title: 'Beautiful & luxurious studio at great location',
    isPremium: false,
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    rating: 5,
    price: 120,
    goods: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      name: 'Angelina',
      isPro: true,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: reviews,
    isFavorite: true,
    location: {
      latitude: 48.8909553943508,
      longitude: 2.35309666406198,
      zoom: 8,
    }
  },
  {
    id: 2,
    city: CITIES_DATA.find((cityToFind) => cityToFind.name === 'Amsterdam'),
    images: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    previewImage: `${OFFER_IMG_URL}${Math.random()}`,
    title: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 6,
    rating: 4.2,
    price: 200,
    goods: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      name: 'Anna',
      isPro: true,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: reviews,
    isFavorite: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    }
  },
  {
    id: 3,
    city: CITIES_DATA.find((cityToFind) => cityToFind.name === 'Paris'),
    images: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    previewImage: `${OFFER_IMG_URL}${Math.random()}`,
    title: 'Wood and stone place',
    isPremium: false,
    type: 'Hotel',
    bedrooms: 1,
    maxAdults: 2,
    rating: 3,
    price: 100,
    goods: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      name: 'Antonio',
      isPro: true,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: reviews,
    isFavorite: false,
    location: {
      latitude: 48.8909553943508,
      longitude: 2.329309666406198,
      zoom: 8,
    }
  },
  {
    id: 4,
    city: CITIES_DATA.find((cityToFind) => cityToFind.name === 'Amsterdam'),
    images: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    previewImage: `${OFFER_IMG_URL}${Math.random()}`,
    title: 'Beautiful & luxurious hotel room',
    isPremium: true,
    type: 'Hotel',
    bedrooms: 2,
    maxAdults: 4,
    rating: 4.5,
    price: 150,
    goods: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer', 'Two toilets',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      name: 'Amelia',
      isPro: true,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: reviews,
    isFavorite: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    }
  },
];
