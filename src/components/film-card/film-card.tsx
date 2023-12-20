import {FilmWithPreview} from '../../types/film';
import {MouseEventHandler, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Video} from '../video/video';
import {PREVIEW_TIMEOUT} from '../../consts';

type FilmCardPros = {
  film: FilmWithPreview;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
  isSelected?: boolean;
}

export function FilmCard({film, onMouseLeave, onMouseEnter, isSelected}: FilmCardPros){
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, PREVIEW_TIMEOUT);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [isSelected]);
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        {isPlaying && <Video src={film.previewVideoLink} width={280} height={175} muted autoPlay poster={film.previewImage}/>}
        {!isPlaying && <img src={film.previewImage} alt="Snatch" width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>);
}
