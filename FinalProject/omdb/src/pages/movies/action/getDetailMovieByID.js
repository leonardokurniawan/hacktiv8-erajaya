import { createAsyncThunk } from '@reduxjs/toolkit';
import { key, url } from '../../../constants';

export const getDetailMovieByID = createAsyncThunk(
  'GET_DETAIL_MOVIE_BY_ID',
  async (id) => {
    const request = await fetch(`${url}/?i=${id}&apikey=${key}`, {
      method: 'GET',
    });
    const response = await request.json();
    return response;
  },
);
