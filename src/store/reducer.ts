import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES} from '../consts';
import {setGenreFilter} from './action';
import {Film, FilmFull, FilmWithPreview} from '../types/film';
import {fetchFilm, fetchFilms, fetchPromo, fetchReviews} from './api/api-actions';
import {Review} from '../types/review';

export type RootState = {
  genreFilter: string;
  genreFilteredFilms: Array<FilmWithPreview>;
  films: Array<FilmWithPreview>;
  genres: Array<string>;
  isLoading: boolean;
  promoFilm: Film | null;
  selectedFilm: FilmFull | null;
  reviews: Array<Review>;
}

const initialState: RootState = {
  genreFilter: ALL_GENRES,
  genreFilteredFilms: [],
  films: [],
  genres: [ALL_GENRES],
  isLoading: false,
  promoFilm: null,
  selectedFilm: null,
  reviews: [],
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreFilter, (state, {payload}) => {
      state.genreFilter = payload;
      state.genreFilteredFilms = state.films.filter((film) => state.genreFilter === ALL_GENRES || film.genre === state.genreFilter);
    })
    .addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.genreFilteredFilms = state.films.filter((film) => state.genreFilter === ALL_GENRES || film.genre === state.genreFilter);
      state.genres = [ALL_GENRES, ...new Set(state.films.map((film) => film.genre))];
      state.isLoading = false;
    })
    .addCase(fetchFilm.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchFilm.fulfilled, (state, action) => {
      state.selectedFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPromo.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
});
