import {createAction} from '@reduxjs/toolkit';

export const setGenreFilter = createAction('SET_GENRE_FILTER', (genre: string) => ({
  payload: genre
}));


