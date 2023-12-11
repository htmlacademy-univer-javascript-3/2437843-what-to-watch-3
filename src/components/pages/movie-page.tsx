import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {NotFound} from './not-found';
import {FilmsList} from '../films/films-list';
import {Footer} from '../parts/footer';
import {Tabs} from '../tabs/tabs';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {fetchFilm, fetchReviews, fetchSimilar} from '../../store/api/api-actions';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {Loader} from '../parts/loader';
import {Header} from '../parts/header';
import {ReducerName} from '../../store/reducers/reducer-types';
import {AuthStatus} from '../../types/auth-status';
import {AddToFavoriteButton} from '../films/add-to-favorite-button';

export function MoviePage(){
  const {id} = useParams();
  const films = useAppSelector((state) => state[ReducerName.Film].similarFilms);
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);
  const film = useAppSelector((state) => state[ReducerName.Film].selectedFilm);
  const reviews = useAppSelector((state) => state[ReducerName.Film].reviews);
  const authStatus = useAppSelector((state) => state[ReducerName.Auth].authorizationStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
      dispatch(fetchReviews(id));
      dispatch(fetchSimilar(id));
    }
  }, [dispatch, id]);
  if (isLoading) {
    return (<Loader/>);
  }
  if (!film || !id) {
    return (<NotFound/>);
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {authStatus === AuthStatus.Authorized && <AddToFavoriteButton filmId={id} status={film.isFavorite}/>}
                {authStatus === AuthStatus.Authorized && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poter film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"
              />
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films.slice(0, 4)}/>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
