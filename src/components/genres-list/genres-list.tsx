import {useDispatch} from 'react-redux';
import cn from 'classnames';
import {setGenreFilter} from '../../store/action';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {getAvailableGenres, getGenre} from '../../store/reducers/film-reducer/selectors';


export function GenresList(){
  const selectedGenre = useAppSelector(getGenre);
  const allGenres = useAppSelector(getAvailableGenres);
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': selectedGenre === genre})}>
          <button onClick={() => dispatch(setGenreFilter(genre))} className="catalog__genres-link" data-testid={`button-genre-${genre}`}>{genre}</button>
        </li>
      ))}
    </ul>
  );
}
