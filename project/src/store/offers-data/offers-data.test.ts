import { CityFilter } from '../../types/city';
import { OfferSortType } from '../../types/sort';
import { OffersData } from '../../types/state';
import { mockOffers } from '../../utils/mock-offers';
import { getFavoriteOffers, makeSelectedCity, makeSelectedSortType } from '../../utils/mocks';
import { fetchFavoritesAction, fetchOffersAction } from '../actions/api-actions';
import { changeCityAction, changeSortTypeAction, offersData, sortOffers } from './offers-data-slice';

const mockSelectedCity = makeSelectedCity();
const mockSelectedSortType = makeSelectedSortType();
const mockFavoriteOffers = getFavoriteOffers();
const initialState: OffersData = {
  city: 'Paris',
  offers: [],
  filteredOffers: [],
  sortType: 'sortPopular',
  hasError: false,
  isOffersDataLoading: false,
  favorites: [],
};

describe('Reducer: offers-data', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should change the selected filter', () => {
    const state = {
      city: 'Paris' as CityFilter,
      offers: mockOffers,
      filteredOffers: sortOffers(mockOffers.filter((offer) => offer.city?.name === 'Paris'), 'sortPopular'),
      sortType: 'sortPopular' as OfferSortType,
      hasError: false,
      isOffersDataLoading: false,
      favorites: [],
    };
    expect(offersData.reducer(state, changeCityAction(mockSelectedCity)))
      .toEqual({
        city: mockSelectedCity,
        offers: mockOffers,
        filteredOffers: sortOffers(mockOffers.filter((offer) => offer.city?.name === mockSelectedCity), 'sortPopular'),
        sortType: 'sortPopular' as OfferSortType,
        hasError: false,
        isOffersDataLoading: false,
        favorites: [],
      });
  });

  it('should change the selected sort type', () => {
    const state = {
      city: 'Paris' as CityFilter,
      offers: mockOffers,
      filteredOffers: sortOffers(mockOffers.filter((offer) => offer.city?.name === 'Paris'), 'sortPopular'),
      sortType: 'sortPopular' as OfferSortType,
      hasError: false,
      isOffersDataLoading: false,
      favorites: [],
    };
    expect(offersData.reducer(state, changeSortTypeAction(mockSelectedSortType)))
      .toEqual({
        city: 'Paris' as CityFilter,
        offers: mockOffers,
        filteredOffers: sortOffers(mockOffers.filter((offer) => offer.city?.name === 'Paris'), mockSelectedSortType),
        sortType: mockSelectedSortType,
        hasError: false,
        isOffersDataLoading: false,
        favorites: [],
      });
  });

  it('should update offers by load offers', () => {
    const state = initialState;
    expect(offersData.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: mockOffers }))
      .toEqual({
        city: 'Paris' as CityFilter,
        offers: mockOffers,
        filteredOffers: sortOffers(mockOffers.filter((offer) => offer.city?.name === 'Paris'), 'sortPopular'),
        sortType: 'sortPopular' as OfferSortType,
        hasError: false,
        isOffersDataLoading: false,
        favorites: [],
      });
  });

  it('should update status isOffersDataLoading in the process of loading offers', () => {
    const state = initialState;
    expect(offersData.reducer(state, { type: fetchOffersAction.pending.type }))
      .toEqual({
        city: 'Paris' as CityFilter,
        offers: [],
        filteredOffers: [],
        sortType: 'sortPopular' as OfferSortType,
        hasError: false,
        isOffersDataLoading: true,
        favorites: [],
      });
  });

  it('should update status isOffersDataLoading and hasError if offers are not loaded', () => {
    const state = initialState;
    expect(offersData.reducer(state, { type: fetchOffersAction.rejected.type }))
      .toEqual({
        city: 'Paris' as CityFilter,
        offers: [],
        filteredOffers: [],
        sortType: 'sortPopular' as OfferSortType,
        hasError: true,
        isOffersDataLoading: false,
        favorites: [],
      });
  });

  it('should update favorite offers by load favorite offers', () => {
    const state = initialState;
    expect(offersData.reducer(state, { type: fetchFavoritesAction.fulfilled.type, payload: mockFavoriteOffers }))
      .toEqual({
        city: 'Paris' as CityFilter,
        offers: [],
        filteredOffers: [],
        sortType: 'sortPopular' as OfferSortType,
        hasError: false,
        isOffersDataLoading: false,
        favorites: mockFavoriteOffers,
      });
  });
});
