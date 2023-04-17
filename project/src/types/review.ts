export type Review = {
  id: number;
  rating: number;
  date: string;
  comment: string;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type NewComment = {
  offerId: string;
  rating: number;
  comment: string;
}
