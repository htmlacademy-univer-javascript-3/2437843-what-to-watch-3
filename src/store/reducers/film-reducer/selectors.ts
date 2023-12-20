import {RootState} from '../../index';
import {ReducerName} from '../reducer-types';

export const getLoadingStatus = (state: RootState) => state[ReducerName.Film].isLoading;
export const getFilm = (state: RootState) => state[ReducerName.Film].selectedFilm;
export const getPromoFilm = (state: RootState) => state[ReducerName.Film].promoFilm;
export const getFilmsByGenre = (state: RootState) => state[ReducerName.Film].genreFilteredFilms;
export const getFavoriteFilms = (state: RootState) => state[ReducerName.Film].favoriteFilms;
export const getFavoriteFilmsCount = (state: RootState): number => state[ReducerName.Film].favoriteFilms.length;
export const getSimilarFilms = (state: RootState) => state[ReducerName.Film].similarFilms;
export const getFilmReviews = (state: RootState) => state[ReducerName.Film].reviews;
export const getGenre = (state: RootState) => state[ReducerName.Film].genreFilter;
export const getAvailableGenres = (state: RootState) => state[ReducerName.Film].genres;
