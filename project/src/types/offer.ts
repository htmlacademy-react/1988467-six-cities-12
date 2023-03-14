import { Review } from './review';

// export type Picture = {
//   picture: string;
// };

// export type Pictures = {
//   pictures: string[];
// };

// export type InsideItem = {
//   insideItem: string;
// }

// export type InsideList = {
//   insideList: InsideItem[];
// }

export type HostUser = {
  avatar: string;
  hostUserName: string;
  hostUserStatus: string;
}

export type Offer = {
  id: number;
  pictures: string[];
  title: string;
  mark: string;
  apartmentType: string;
  bedrooms: string;
  adults: string;
  rating: number;
  price: string;
  insideList: string[];
  hostUser: HostUser;
  description: string;
  review: Review;
};
