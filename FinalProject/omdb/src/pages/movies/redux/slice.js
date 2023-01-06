import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../action/getMovies';

const initialState = {
  isLoading: false,
  isSuccess: false,
  data: [],
};

const MoviesSlice = createSlice({
  name: 'Movies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload?.Search;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
}).reducer;

export default MoviesSlice;
