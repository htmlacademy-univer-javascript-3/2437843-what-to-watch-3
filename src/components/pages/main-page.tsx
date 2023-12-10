import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../parts/footer';
import {GenresList} from '../films/genres-list';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {Loader} from '../parts/loader';
import {FilmsListWithShowMore} from '../films/films-list-with-show-more';
import {Header} from '../parts/header';
import {ReducerName} from '../../store/reducers/reducer-types';
import {AuthStatus} from '../../types/auth-status';
import {AddToFavoriteButton} from '../films/add-to-favorite-button';

export function MainPage(){
  const filteredFilms = useAppSelector((state) => state[ReducerName.Film].genreFilteredFilms);
  const promoFilm = useAppSelector((state) => state[ReducerName.Film].promoFilm);
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);
  const authStatus = useAppSelector((state) => state[ReducerName.Auth].authorizationStatus);

  if (promoFilm === null || isLoading) {
    return (<Loader/>);
  }
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {authStatus === AuthStatus.Authorized && <AddToFavoriteButton filmId={promoFilm.id} status={promoFilm.isFavorite}/>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsListWithShowMore films={filteredFilms}/>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
