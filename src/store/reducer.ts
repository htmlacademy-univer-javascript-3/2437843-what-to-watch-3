import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES} from '../consts';
import {fetchFilms, setGenreFilter} from './action';
import {MOCK_FILMS} from '../mocks/films';
import {Film} from '../types/film';

export type RootState = {
  genreFilter: string;
  films: Array<Film>;
}

const initialState: RootState = {
  genreFilter: ALL_GENRES,
  films: [],
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreFilter, (state, {payload}) => {
      state.genreFilter = payload;
    })
    .addCase(fetchFilms, (state) => {
      state.films = MOCK_FILMS.filter((film) => state.genreFilter === ALL_GENRES || film.genre === state.genreFilter);
    });
});
