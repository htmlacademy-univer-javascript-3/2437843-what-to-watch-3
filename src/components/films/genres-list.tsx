import {useDispatch} from 'react-redux';
import cn from 'classnames';
import {setGenreFilter} from '../../store/action';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {ReducerName} from '../../store/reducers/reducer-types';


export function GenresList(){
  const selectedGenre = useAppSelector((state) => state[ReducerName.Film].genreFilter);
  const allGenres = useAppSelector((state) => state[ReducerName.Film].genres);
  const dispatch = useDispatch();

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
