import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {NotFound} from './not-found';
import {FilmsList} from '../films/films-list';
import {Footer} from '../parts/footer';
import {Tabs} from '../tabs/tabs';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {fetchFilm, fetchReviews} from '../../store/api/api-actions';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {Loader} from '../parts/loader';

export function MoviePage(){
  const {id} = useParams();
  const films = useAppSelector((state) => state.films);
  const isLoading = useAppSelector((state) => state.isLoading);
  const film = useAppSelector((state) => state.selectedFilm);
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
      dispatch(fetchReviews(id));
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

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={'/'} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
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
          <FilmsList films={films.filter((item) => item.genre === film.genre).slice(0, 4)}/>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
