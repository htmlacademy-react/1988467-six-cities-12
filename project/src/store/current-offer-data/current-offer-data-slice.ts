import { createSlice } from '@reduxjs/toolkit';
import { CurrentOfferData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchCommentsAction, fetchNearPlacesAction, fetchSelectedOfferAction } from '../actions/api-actions';

const initialState: CurrentOfferData = {
  comments: [],
  selectedOffer: null,
  nearPlaces: [],
};

export const currentOfferData = createSlice({
  name: NameSpace.CurrentOfferData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      });
  }
});
