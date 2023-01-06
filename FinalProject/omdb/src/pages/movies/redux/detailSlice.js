import { createSlice } from '@reduxjs/toolkit';
import { getDetailMovieByID } from '../action/getDetailMovieByID';

const initialState = {
  isLoading: false,
  isSuccess: false,
  data: {},
};

const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDetailMovieByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDetailMovieByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getDetailMovieByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
}).reducer;

export default MovieSlice;
