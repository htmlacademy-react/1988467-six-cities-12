import { City } from './city';
import { Review } from './review';

export type HostUser = {
  avatarUrl: string;
  id: number;
  name: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
  city: City | undefined;
  images: [string, string, string, string, string, string];
  previewImage: string;
  title: string;
  isPremium: boolean;
  type: string;
  bedrooms: number;
  maxAdults: number;
  rating: number;
  price: number;
  goods: string[];
  host: HostUser;
  description: string;
  reviews: Review[];
  isFavorite: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
