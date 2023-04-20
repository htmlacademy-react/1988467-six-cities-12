import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getComments = (state: State): Review[] => state[NameSpace.CurrentOfferData].comments;
export const getSelectedOffer = (state: State): Offer | null => state[NameSpace.CurrentOfferData].selectedOffer;
export const getNearPlaces = (state: State): Offer[] => state[NameSpace.CurrentOfferData].nearPlaces;
