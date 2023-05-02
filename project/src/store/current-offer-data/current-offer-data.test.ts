import { CurrentOfferData } from '../../types/state';
import { mockReviews } from '../../utils/mock-reviews';
import { getCurrentOffer, makeNearPlaces } from '../../utils/mocks';
import { fetchCommentsAction, fetchNearPlacesAction, fetchSelectedOfferAction } from '../actions/api-actions';
import { currentOfferData } from './current-offer-data-slice';

const mockCurrentOffer = getCurrentOffer();
const mockNearPlaces = makeNearPlaces();
const initialState: CurrentOfferData = {
  comments: [],
  selectedOffer: null,
  nearPlaces: [],
};

describe('Reducer: current-offer-data', () => {
  it('without additional parameters should return initial state', () => {
    expect(currentOfferData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should update selected offer when clicking on the offer card', () => {
    const state = initialState;
    expect(currentOfferData.reducer(state, { type: fetchSelectedOfferAction.fulfilled.type, payload: mockCurrentOffer }))
      .toEqual({
        comments: [],
        selectedOffer: mockCurrentOffer,
        nearPlaces: [],
      });
  });

  it('should update comments by load comments', () => {
    const state = initialState;
    expect(currentOfferData.reducer(state, { type: fetchCommentsAction.fulfilled.type, payload: mockReviews }))
      .toEqual({
        comments: mockReviews,
        selectedOffer: null,
        nearPlaces: [],
      });
  });

  it('should update near-places by load near-places', () => {
    const state = initialState;
    expect(currentOfferData.reducer(state, { type: fetchNearPlacesAction.fulfilled.type, payload: mockNearPlaces }))
      .toEqual({
        comments: [],
        selectedOffer: null,
        nearPlaces: mockNearPlaces,
      });
  });
});
