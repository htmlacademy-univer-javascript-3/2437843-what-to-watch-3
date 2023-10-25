import {MainPage, MainPageProps} from './components/pages/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MoviePage} from './components/pages/movie-page';
import {AddReviewPage} from './components/pages/add-review-page';
import {PlayerPage} from './components/pages/player-page';
import {NotFound} from './components/pages/not-found';
import {SignInPage} from './components/pages/sign-in-page';
import {PrivateRoute} from './components/routes/private-route';
import {MyListPage} from './components/pages/my-list-page';
import {Film} from './types/film';

type AppProps = {
    mainPageParams: MainPageProps;
    mockFilms: Array<Film>;
}

export function App({mainPageParams, mockFilms}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage {...mainPageParams}/>}/>
        <Route path="/login" element={<SignInPage/>}/>
        <Route path="/mylist" element={
          <PrivateRoute>
            <MyListPage films={mockFilms}/>
          </PrivateRoute>
        }
        />
        <Route path="/films/:id" element={<MoviePage films={mockFilms}/>}/>
        <Route path="/films/:id/review" element={<AddReviewPage films={mockFilms}/>}/>
        <Route path="/player/:id" element={<PlayerPage films={mockFilms}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
