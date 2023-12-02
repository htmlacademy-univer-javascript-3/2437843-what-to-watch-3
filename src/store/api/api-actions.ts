import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../index';
import {FilmFull, Film, FilmWithPreview} from '../../types/film';
import {AxiosInstance} from 'axios';
import {RootState} from '../reducer';
import {Review} from '../../types/review';
import {User} from '../../types/user';
import {AuthorizationData} from '../../types/auth-data';

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

export const checkAuth = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User>('/login');
    return data;
  },
);

export const login = createAsyncThunk<User, AuthorizationData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<User>('/login', {email, password});
    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  '/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
  },
);
