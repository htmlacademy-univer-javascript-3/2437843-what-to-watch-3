import {Link, useParams} from 'react-router-dom';
import {NotFound} from './not-found';
import {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {fetchFilm} from '../../store/api/api-actions';
import {Loader} from '../parts/loader';

export function AddReviewPage(){
  const {id} = useParams();
  const [selectedRating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const isLoading = useAppSelector((state) => state.isLoading);
  const film = useAppSelector((state) => state.selectedFilm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);
  if (isLoading) {
    return (<Loader/>);
  }
  if (!film || !id){
    return (<NotFound/>);
  }
  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => setRating(parseInt(event.target.value, 10));
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={'/'} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" checked={selectedRating === 10} onChange={handleRatingChange} value={10}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" checked={selectedRating === 9} onChange={handleRatingChange} value={9}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" checked={selectedRating === 8} onChange={handleRatingChange} value={8}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" checked={selectedRating === 7} onChange={handleRatingChange} value={7}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" checked={selectedRating === 6} onChange={handleRatingChange} value={6}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" checked={selectedRating === 5} onChange={handleRatingChange} value={5}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" checked={selectedRating === 4} onChange={handleRatingChange} value={4}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" checked={selectedRating === 3} onChange={handleRatingChange} value={3}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" checked={selectedRating === 2} onChange={handleRatingChange} value={2}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" checked={selectedRating === 1} onChange={handleRatingChange} value={1}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>);
}
