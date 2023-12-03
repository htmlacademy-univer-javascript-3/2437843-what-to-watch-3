import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES} from '../consts';
import {setAuthError, setAuthStatus, setGenreFilter} from './action';
import {Film, FilmFull, FilmWithPreview} from '../types/film';
import {
  addReview,
  checkAuth,
  fetchFilm,
  fetchFilms,
  fetchPromo,
  fetchReviews,
  fetchSimilar,
  login,
  logout
} from './api/api-actions';
import {Review} from '../types/review';
import {AuthStatus} from '../types/auth-status';
import {User} from '../types/user';
import {removeToken, setToken} from '../utils/token-storage';

export type RootState = {
  genreFilter: string;
  genreFilteredFilms: Array<FilmWithPreview>;
  films: Array<FilmWithPreview>;
  similarFilms: Array<FilmWithPreview>;
  genres: Array<string>;
  isLoading: boolean;
  promoFilm: Film | null;
  selectedFilm: FilmFull | null;
  reviews: Array<Review>;
  authorizationStatus: AuthStatus;
  userInfo: User | null;
  authError: string | null | undefined;
}

const initialState: RootState = {
  genreFilter: ALL_GENRES,
  genreFilteredFilms: [],
  films: [],
  similarFilms: [],
  genres: [ALL_GENRES],
  isLoading: false,
  promoFilm: null,
  selectedFilm: null,
  reviews: [],
  authorizationStatus: AuthStatus.Unknown,
  userInfo: null,
  authError: null,
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
    })
    .addCase(setAuthStatus, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuthorized;
    })
    .addCase(checkAuth.fulfilled, (state, action)=> {
      state.authorizationStatus = AuthStatus.Authorized;
      state.userInfo = action.payload;
      setToken(action.payload.token);
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthStatus.NoAuthorized;
      removeToken();
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthStatus.Authorized;
      state.userInfo = action.payload;
      setToken(action.payload.token);
    })
    .addCase(login.rejected, (state, action)=> {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.authError = action.payload.details.map((item) => item.messages).join('\n');
      } else {
        state.authError = action.error.message;
      }
    })
    .addCase(setAuthError, (state, {payload}) => {
      state.authError = payload;
    })
    .addCase(fetchSimilar.fulfilled, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(addReview.fulfilled, (state, {payload}) => {
      state.reviews = state.reviews.concat(payload);
    });
});
