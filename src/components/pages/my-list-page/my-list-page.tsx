import {FilmsList} from '../../films-list/films-list';
import {useAppSelector} from '../../../store/hooks/use-app-selector';
import {Header} from '../../header/header';
import {Footer} from '../../footer/footer';
import {ReducerName} from '../../../store/reducers/reducer-types';

export function MyListPage(){
  const films = useAppSelector((state) => state[ReducerName.Film].favoriteFilms);
  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer/>
    </div>
  );
}
