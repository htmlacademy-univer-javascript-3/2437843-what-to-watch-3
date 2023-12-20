import {MOCK_FILM, MOCK_FILMS_LIST} from '../../../utils/mocks/films';
import reviews from '../../../utils/mocks/reviews';
import {FilmReducerState} from '../../../types/reducers/film-reducer-state';
import {filmReducer} from './film-reducer';
import {ALL_GENRES} from '../../../consts';
import {fetchFavoriteFilms, fetchFilm, fetchFilms, fetchPromo, fetchReviews, fetchSimilar} from '../../api/api-actions';
import {setGenreFilter} from '../../action';

const mockFilm = MOCK_FILM;
const mockFilms = MOCK_FILMS_LIST;
const mockReviews = reviews;
const genresList = [ALL_GENRES, ...new Set(mockFilms.map((film) => film.genre))];
describe('film reducer slice tests', () => {
  let state: FilmReducerState;

  beforeEach(() => {
    state = {
      genreFilter: ALL_GENRES,
      genreFilteredFilms: [],
      films: [],
      similarFilms: [],
      genres: [ALL_GENRES],
      isLoading: false,
      promoFilm: null,
      selectedFilm: null,
      reviews: [],
      favoriteFilms: [],
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmReducer.reducer(void 0, { type: '' }))
      .toEqual({
        genreFilter: ALL_GENRES,
        genreFilteredFilms: [],
        films: [],
        similarFilms: [],
        genres: [ALL_GENRES],
        isLoading: false,
        promoFilm: null,
        selectedFilm: null,
        reviews: [],
        favoriteFilms: [],
      });
  });

  describe('fetchFilms test', () => {
    it('should set isLoading true on pending', () => {
      expect(filmReducer.reducer(state, {type: fetchFilms.pending.type, payload: mockFilms}).isLoading)
        .toEqual(true);
    });
    it('should set isLoading false on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchFilms.fulfilled.type, payload: mockFilms}).isLoading)
        .toEqual(false);
    });
    it('should set films on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchFilms.fulfilled.type, payload: mockFilms}).films)
        .toEqual(mockFilms);
    });
    it('should set genre films equal films on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchFilms.fulfilled.type, payload: mockFilms}).genreFilteredFilms)
        .toEqual(mockFilms);
    });
    it('should update genres list to uniq genres on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchFilms.fulfilled.type, payload: mockFilms}).genres)
        .toEqual(genresList);
    });
  });

  describe('fetchFilm test', () => {
    it('should set isLoading on pending', () => {
      expect(filmReducer.reducer(state, {type: fetchFilm.pending.type}).isLoading)
        .toEqual(true);
    });
    it('should load film on fulfilled', () => {
      expect(filmReducer.reducer(state, { type: fetchFilm.fulfilled.type, payload: mockFilm }).selectedFilm)
        .toEqual(mockFilm);
    });
    it('should set isLoading false on fulfilled', () => {
      state.isLoading = true;
      expect(filmReducer.reducer(state, { type: fetchFilm.fulfilled.type, payload: mockFilm }).isLoading)
        .toEqual(false);
    });
  });

  describe('fetchSimilar test', () => {
    it('should load similar films on fulfilled', () => {
      expect(filmReducer.reducer(state, { type: fetchSimilar.fulfilled.type, payload: mockFilms }).similarFilms)
        .toEqual(mockFilms);
    });
  });

  describe('fetchReviews test', () => {
    it('should load reviews on fulfilled', () => {
      expect(filmReducer.reducer(state, { type: fetchReviews.fulfilled.type, payload: mockReviews }).reviews)
        .toMatchObject(mockReviews);
    });
  });

  describe('setGenreFilter test', () => {
    it('should set genre', () => {
      expect(filmReducer.reducer(state, {type: setGenreFilter.type, payload: mockFilm.genre}).genreFilter)
        .toEqual(mockFilm.genre);
    });
    it('setGenre should set genre films', () => {
      state.genreFilteredFilms = [mockFilm];
      expect(filmReducer.reducer(state, {type: setGenreFilter.type, payload: mockFilm.genre}).genreFilteredFilms)
        .toEqual([]);
    });
  });

  describe('fetchPromo test', () => {
    it('should set promo on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchPromo.fulfilled.type, payload: mockFilm}).promoFilm)
        .toEqual(mockFilm);
    });
  });

  describe('fetchFavoriteFilms test', () => {
    it('should set favorite films on fulfilled', () => {
      expect(filmReducer.reducer(state, {type: fetchFavoriteFilms.fulfilled.type, payload: mockFilms}).favoriteFilms)
        .toEqual(mockFilms);
    });
    it('should set favorite films empty on rejected', () => {
      state.favoriteFilms = [mockFilm];
      expect(filmReducer.reducer(state, {type: fetchFavoriteFilms.rejected.type, payload: mockFilms}).favoriteFilms)
        .toEqual([]);
    });
  });
});
