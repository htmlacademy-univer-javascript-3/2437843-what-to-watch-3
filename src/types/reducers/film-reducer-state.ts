import {Film, FilmFull, FilmWithPreview} from '../film';
import {Review} from '../review';

export type FilmReducerState = {
  genreFilter: string;
  genreFilteredFilms: Array<FilmWithPreview>;
  films: Array<FilmWithPreview>;
  similarFilms: Array<FilmWithPreview>;
  genres: Array<string>;
  isLoading: boolean;
  promoFilm: Film | null;
  selectedFilm: FilmFull | null;
  reviews: Array<Review>;
  favoriteFilms: Array<FilmWithPreview>;
}
