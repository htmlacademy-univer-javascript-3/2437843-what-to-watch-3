import {FilmFull} from '../../../types/film';
import React from 'react';

type OverviewTabProps = {
  film: FilmFull;
}

function getRatingLevelWords(rating: number) {
  switch (true) {
    case (rating >= 0 && rating < 3):
      return 'Bad';
    case (rating >= 3 && rating < 5):
      return 'Normal';
    case (rating >= 5 && rating < 8):
      return 'Good';
    case (rating >= 8 && rating < 10):
      return 'Very good';
    case (rating === 10):
      return 'Awesome';
    default:
      return 'Invalid rating';
  }
}

export function OverviewTab({film}: OverviewTabProps){
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevelWords(film.rating)} </span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            {film.starring.slice(0, 3).join(', ')} {film.starring.length > 3 && 'and more'}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}
