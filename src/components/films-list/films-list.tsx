import {FilmWithPreview} from '../../types/film';
import {FilmCard} from '../film-card/film-card';
import {useState} from 'react';

type FilmsListProps = {
  films: Array<FilmWithPreview>;
}
export function FilmsList({films}: FilmsListProps){
  const [hoveredFilm, setHoveredFilm] = useState<FilmWithPreview | null>(null);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isSelected={hoveredFilm?.id === film.id}
          onMouseEnter={() => setHoveredFilm(film)}
          onMouseLeave={() => setHoveredFilm(null)}
        />))}
    </div>
  );
}
