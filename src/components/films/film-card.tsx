import {Film} from '../../types/film';
import {MouseEventHandler} from "react";

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
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>);
}
