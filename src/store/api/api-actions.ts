import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../index';
import {FilmFull, Film, FilmWithPreview} from '../../types/film';
import {AxiosInstance} from 'axios';
import {RootState} from '../reducer';
import {Review} from '../../types/review';

export const fetchFilms = createAsyncThunk<FilmWithPreview[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/films',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmWithPreview[]>('/films');
    return data;
  },
);

export const fetchFilm = createAsyncThunk<FilmFull, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/films/id',
  async (filmId: string, {extra: api}) => {
    const {data} = await api.get<FilmFull>(`/films/${filmId}`);
    return data;
  },
);

export const fetchPromo = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/promo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/reviews',
  async (filmId: string, {extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    return data;
  },
);
