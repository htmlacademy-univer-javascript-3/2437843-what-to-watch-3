import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES, INIT_FILMS_LIMIT} from '../consts';
import {addLimitFilms, fetchFilms, fetchGenres, setGenreFilter, setLimitFilms} from './action';
import {MOCK_FILMS} from '../mocks/films';
import {Film} from '../types/film';

export type RootState = {
  genreFilter: string;
  films: Array<Film>;
  limitFilms: number;
  totalFilmsCount: number;
  genres: Array<string>;
}

const initialState: RootState = {
  genreFilter: ALL_GENRES,
  films: [],
  limitFilms: INIT_FILMS_LIMIT,
  totalFilmsCount: 0,
  genres: [ALL_GENRES],
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreFilter, (state, {payload}) => {
      state.genreFilter = payload;
    })
    .addCase(addLimitFilms, (state, {payload}) => {
      state.limitFilms += payload;
    })
    .addCase(setLimitFilms, (state, {payload}) => {
      state.limitFilms = payload;
    })
    .addCase(fetchGenres, (state) =>{
      state.genres = [ALL_GENRES, ...new Set(MOCK_FILMS.map((film) => film.genre))];
    })
    .addCase(fetchFilms, (state) => {
      const films = MOCK_FILMS.filter((film) => state.genreFilter === ALL_GENRES || film.genre === state.genreFilter);
      state.totalFilmsCount = films.length;
      state.films = films.slice(0, state.limitFilms);
    });
});
