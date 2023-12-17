import {createAction} from '@reduxjs/toolkit';

export const setGenreFilter = createAction('SET_GENRE_FILTER', (genre: string) => ({
  payload: genre
}));


export const setAuthError = createAction('SET_AUTH_ERROR', (status: string | null) => ({
  payload: status
}));
