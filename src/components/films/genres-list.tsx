import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import cn from 'classnames';
import {ALL_GENRES} from '../../consts';
import {setGenreFilter} from '../../store/action';

type GenresListProps = {
  genres: Set<string>;
}

export function GenresList({genres}:GenresListProps){
  const selectedGenre = useSelector((state:RootState) => state.genreFilter);
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
