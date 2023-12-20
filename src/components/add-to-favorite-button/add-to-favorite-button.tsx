import {FormEvent} from 'react';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {setFavoriteStatus} from '../../store/api/api-actions';
import {getFavoriteFilmsCount} from '../../store/reducers/film-reducer/selectors';

type AddToFavoriteButtonProps= {
  filmId: string;
  status: boolean;
}
export function AddToFavoriteButton({filmId, status}: AddToFavoriteButtonProps){
  const dispatch = useAppDispatch();
  const favoriteCount = useAppSelector(getFavoriteFilmsCount);

  function handleToggleFavoriteClick(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(setFavoriteStatus({status: !status, filmId: filmId}));
  }
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleToggleFavoriteClick}>
      {
        status ?
          (<svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#in-list" data-testid="in-list" /></svg>) :
          (<svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add" data-testid="add"/></svg>)
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteCount}</span>
    </button>
  );
}
