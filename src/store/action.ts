import {createAction} from '@reduxjs/toolkit';

export const setGenreFilter = createAction('SET_GENRE_FILTER', (genre: string) => ({
  payload: genre
}));

export const addLimitFilms = createAction('ADD_LIMIT_FILMS', (addingValue: number) => ({
  payload: addingValue
}));

export const setLimitFilms = createAction('SET_LIMIT_FILMS', (limit: number) => ({
  payload: limit
}));
export const fetchFilms = createAction('FETCH_FILMS');
export const fetchGenres = createAction('FETCH_GENRES');


