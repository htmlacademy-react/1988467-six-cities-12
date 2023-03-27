import { Review } from './review';

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
  isFavorite: boolean;
  lat: number;
  lng: number;
};
