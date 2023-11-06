import {Film} from '../../types/film';
import React from 'react';

type OverviewTabProps = {
  film: Film;
}

export function OverviewTab({film}: OverviewTabProps){
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.rating.score > 8 ? 'Very good' : 'Not good'} </span>
          <span className="film-rating__count">{film.rating.score}</span>
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
