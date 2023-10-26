import {Film} from '../../types/film';
import {MouseEventHandler} from 'react';
import {Link} from 'react-router-dom';

type FilmCardPros = {
  film: Film;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

export function FilmCard({film, onMouseLeave, onMouseEnter}: FilmCardPros){
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={film.poster} alt="Snatch" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>);
}
