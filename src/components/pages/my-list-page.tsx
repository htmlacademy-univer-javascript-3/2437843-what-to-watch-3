import {FilmsList} from '../films/films-list';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {Header} from '../parts/header';
import {Footer} from '../parts/footer';

export function MyListPage(){
  const films = useAppSelector((state) => state.films);
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
