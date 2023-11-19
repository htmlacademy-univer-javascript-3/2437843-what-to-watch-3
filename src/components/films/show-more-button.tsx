import {useDispatch} from 'react-redux';
import {addLimitFilms} from '../../store/action';
import {FILMS_PAGE_SIZE} from '../../consts';


export function ShowMoreButton(){
  const dispatch = useDispatch();
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(addLimitFilms(FILMS_PAGE_SIZE))}>Show more</button>
    </div>
  );
}
