import { Offer, HostUser, InsideItem, InsideList } from '../types/offer';
import { reviews } from './reviews';

const OFFER_IMG_URL = 'https://loremflickr.com/248/152?random=';
const AVATAR_URL = 'https://i.pravatar.cc/128';

// const picture: Picture = `${OFFER_IMG_URL}${Math.random()}`;

export const offers: Offer[] = [
  {
    id: 1,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful &amp; luxurious studio at great location',
    mark: 'Premium',
    apartmentType: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    rating: 5,
    price: '&euro;120',
    insideList: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Angelina',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[0],
  },
  {
    id: 2,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful &amp; luxurious studio at great location',
    mark: 'Premium',
    apartmentType: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 6 adults',
    rating: 5,
    price: '&euro;200',
    insideList: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Anna',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[1],
  },
  {
    id: 3,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful &amp; luxurious hotel room',
    mark: 'Premium',
    apartmentType: 'Hotel',
    bedrooms: '1 Bedroom',
    adults: 'Max 2 adults',
    rating: 5,
    price: '&euro;100',
    insideList: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Antonio',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[2],
  },
  {
    id: 4,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful &amp; luxurious hotel room',
    mark: 'Premium',
    apartmentType: 'Hotel',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    rating: 5,
    price: '&euro;150',
    insideList: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer', 'Two toilets',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Amelia',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[3],
  },
];
