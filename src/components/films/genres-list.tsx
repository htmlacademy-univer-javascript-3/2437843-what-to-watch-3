import {useDispatch} from 'react-redux';
import cn from 'classnames';
import {ALL_GENRES} from '../../consts';
import {setGenreFilter} from '../../store/action';
import {useAppSelector} from '../../store/hooks/use-app-selector';

type GenresListProps = {
  genres: Set<string>;
}

export function GenresList({genres}:GenresListProps){
  const selectedGenre = useAppSelector((state) => state.genreFilter);
  const dispatch = useDispatch();
  return (
    <ul className="catalog__genres-list">
      {[ALL_GENRES,...genres].map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': selectedGenre === genre})}>
          <button onClick={() => dispatch(setGenreFilter(genre))} className="catalog__genres-link">{genre}</button>
        </li>
      ))}
    </ul>
  );
}
