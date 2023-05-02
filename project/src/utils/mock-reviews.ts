import { Review } from '../types/review';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const mockReviews: Review[] = [
  {
    id: 1,
    rating: 4,
    date: '2022-05-15T06:40:56.845Z',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'John',
      id: 1,
      isPro: true,
    },
  },
  {
    id: 2,
    rating: 4.5,
    date: '2022-06-25T06:40:56.845Z',
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Jim',
      id: 2,
      isPro: true,
    },
  },
  {
    id: 3,
    rating: 3.3,
    date: '2022-09-11T06:40:56.845Z',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Jack',
      id: 3,
      isPro: true,
    },
  },
];
