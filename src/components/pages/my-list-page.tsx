import {FilmsList} from '../films/films-list';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {Header} from '../parts/header';
import {Footer} from '../parts/footer';
import {ReducerName} from '../../store/reducers/reducer-types';

export function MyListPage(){
  const films = useAppSelector((state) => state[ReducerName.Film].films);
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
