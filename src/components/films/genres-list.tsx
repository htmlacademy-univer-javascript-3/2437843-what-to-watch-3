import {useDispatch} from 'react-redux';
import cn from 'classnames';
import {fetchGenres, setGenreFilter} from '../../store/action';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {useEffect} from 'react';

export function GenresList(){
  const selectedGenre = useAppSelector((state) => state.genreFilter);
  const allGenres = useAppSelector((state) => state.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': selectedGenre === genre})}>
          <button onClick={() => dispatch(setGenreFilter(genre))} className="catalog__genres-link">{genre}</button>
        </li>
      ))}
    </ul>
  );
}
