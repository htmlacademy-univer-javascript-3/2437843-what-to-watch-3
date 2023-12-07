import {createAction} from '@reduxjs/toolkit';
import {AuthStatus} from '../types/auth-status';

export const setGenreFilter = createAction('SET_GENRE_FILTER', (genre: string) => ({
  payload: genre
}));


export const setAuthStatus = createAction('SET_AUTH_STATUS', (status: AuthStatus) => ({
  payload: status
}));


export const setAuthError = createAction('SET_AUTH_ERROR', (status: string | null) => ({
  payload: status
}));
