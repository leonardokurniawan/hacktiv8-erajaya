import { createAsyncThunk } from '@reduxjs/toolkit';
import { key, url } from '../../../constants';

export const getMovies = createAsyncThunk(
  'GET_MOVIES',
  async (search, page = 50) => {
    const request = await fetch(
      `${url}/?s='${search}&page=${page}&apikey=${key}`,
      {
        method: 'GET',
      },
    );
    const response = await request.json();
    return response;
  },
);
