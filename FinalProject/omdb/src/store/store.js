import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from '../pages/movies/redux/slice';
import logger from 'redux-logger';
import MovieSlice from '../pages/movies/redux/detailSlice';

export const store = configureStore({
  reducer: {
    Movies: MoviesSlice,
    Movie: MovieSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});
