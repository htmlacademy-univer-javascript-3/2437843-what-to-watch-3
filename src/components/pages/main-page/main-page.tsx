import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../../footer/footer';
import {GenresList} from '../../genres-list/genres-list';
import {useAppSelector} from '../../../store/hooks/use-app-selector';
import {Loader} from '../../loader/loader';
import {FilmsListWithShowMore} from '../../films-lst-with-show-more/films-list-with-show-more';
import {Header} from '../../header/header';
import {AuthStatus} from '../../../types/auth-status';
import {AddToFavoriteButton} from '../../add-to-favorite-button/add-to-favorite-button';
import {getFilmsByGenre, getLoadingStatus, getPromoFilm} from '../../../store/reducers/film-reducer/selectors';
import {getAuthorizationStatus} from '../../../store/reducers/auth-reducer/selectors';

export function MainPage(){
  const filteredFilms = useAppSelector(getFilmsByGenre);
  const promoFilm = useAppSelector(getPromoFilm);
  const isLoading = useAppSelector(getLoadingStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);

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
