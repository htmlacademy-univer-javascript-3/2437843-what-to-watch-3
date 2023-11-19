import React, {useEffect} from 'react';
import {Film} from '../../types/film';
import {FilmsList} from '../films/films-list';
import {Link} from 'react-router-dom';
import {Footer} from '../parts/footer';
import {GenresList} from '../films/genres-list';
import {useDispatch} from 'react-redux';
import {fetchFilms, setGenreFilter, setLimitFilms} from '../../store/action';
import {ALL_GENRES, INIT_FILMS_LIMIT} from '../../consts';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {ShowMoreButton} from '../films/show-more-button';

export type MainPageProps = {
    promoFilm: Film;
    filmsList: Array<Film>;
}

export function MainPage({promoFilm, filmsList}: MainPageProps){
  const filteredFilms = useAppSelector((state) => state.films);
  const limitFilms = useAppSelector((state) => state.limitFilms);
  const selectedGenre = useAppSelector((state) => state.genreFilter);
  const totalFilmsCount = useAppSelector((state) => state.totalFilmsCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGenreFilter(ALL_GENRES));
    dispatch(setLimitFilms(INIT_FILMS_LIMIT));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch, selectedGenre, limitFilms]);
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.poster} alt={promoFilm.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={new Set(filmsList.map((film) => film.genre))}/>
          <FilmsList films={filteredFilms}/>
          {filteredFilms.length < totalFilmsCount && <ShowMoreButton/>}
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
