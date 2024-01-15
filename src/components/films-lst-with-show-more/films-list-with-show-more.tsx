import {FilmsList} from '../films-list/films-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {FilmWithPreview} from '../../types/film';
import {useCallback, useEffect, useState} from 'react';
import {FILMS_PAGE_SIZE, INIT_FILMS_LIMIT} from '../../consts';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {getGenre} from '../../store/reducers/film-reducer/selectors';

type FilmsListWithShowMoreProps = {
  films: Array<FilmWithPreview>;
}

export function FilmsListWithShowMore({films}: FilmsListWithShowMoreProps){
  const selectedGenre = useAppSelector(getGenre);
  const [showLimit, setShowLimit] = useState(INIT_FILMS_LIMIT);
  useEffect(() => {
    setShowLimit(INIT_FILMS_LIMIT);
  }, [selectedGenre]);
  const handleShowMoreClick = useCallback(() => {
    setShowLimit((prevState) => prevState + FILMS_PAGE_SIZE);
  }, []);
  return (
    <>
      <FilmsList films={films.slice(0, showLimit)}/>
      {showLimit < films.length && <ShowMoreButton onClick={handleShowMoreClick}/>}
    </>
  );
}
