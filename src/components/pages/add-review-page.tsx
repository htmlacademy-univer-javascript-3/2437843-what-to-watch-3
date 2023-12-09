import {Link, useNavigate, useParams} from 'react-router-dom';
import {NotFound} from './not-found';
import {ChangeEvent, FormEvent, Fragment, useEffect, useState} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {addReview, fetchFilm} from '../../store/api/api-actions';
import {Loader} from '../parts/loader';
import {Header} from '../parts/header';
import {MAX_LEN_REVIEW, MIN_LEN_REVIEW} from '../../consts';
import {ReducerName} from '../../store/reducers/reducer-types';

export function AddReviewPage(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [selectedRating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [errorText, setError] = useState('');
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);
  const film = useAppSelector((state) => state[ReducerName.Film].selectedFilm);
  const [isDisabled, setIsDisabled] = useState(false);
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
  const isAbleToSubmit = selectedRating > 0 && reviewText.length >= MIN_LEN_REVIEW && reviewText.length <= MAX_LEN_REVIEW && !isDisabled;
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!id || !isAbleToSubmit){
      return;
    }
    setIsDisabled(true);
    dispatch(addReview({rating: selectedRating, comment: reviewText, filmId: id})).then((data) => {
      if (!data.payload){
        throw new Error('Error while adding review');
      }
      setIsDisabled(false);
      navigate(`/films/${id}`);
    }).catch((err) => {
      const error = err as Error;
      if (error.message) {
        setError(error.message);
      }
    });
  }
  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => setRating(parseInt(event.target.value, 10));
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <Header>
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
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
                <Fragment key={num}>
                  <input className="rating__input"
                    id={`star-${num}`}
                    type="radio"
                    name="rating"
                    checked={selectedRating === num}
                    onChange={handleRatingChange}
                    value={num}
                  />
                  <label className="rating__label" htmlFor={`star-${num}`}>Rating {num}</label>
                </Fragment>
              ))}
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
              <button className="add-review__btn" disabled={!isAbleToSubmit} type="submit">Post</button>
            </div>
          </div>
          <p>
            {errorText}
          </p>
        </form>
      </div>

    </section>);
}
