import { Review } from '../types/review';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Review[] = [
  {
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'John',
    rating: 4,
    reviewDate: new Date('2022, 05, 15'),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Jim',
    rating: 5,
    reviewDate: new Date('2022, 06, 25'),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Jack',
    rating: 5,
    reviewDate: new Date('2022, 09, 11'),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
];

