import {MainPage} from './components/pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {MoviePage} from './components/pages/movie-page/movie-page';
import {AddReviewPage} from './components/pages/add-review-page/add-review-page';
import {PlayerPage} from './components/pages/player-page/player-page';
import {NotFound} from './components/not-found/not-found';
import {SignInPage} from './components/pages/sign-in-page/sign-in-page';
import {PrivateRoute} from './components/private-route/private-route';
import {MyListPage} from './components/pages/my-list-page/my-list-page';


export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/login" element={<SignInPage/>}/>
      <Route path="/mylist" element={
        <PrivateRoute>
          <MyListPage />
        </PrivateRoute>
      }
      />
      <Route path="/films/:id" element={<MoviePage/>}/>
      <Route path="/films/:id/review" element={
        <PrivateRoute>
          <AddReviewPage/>
        </PrivateRoute>
      }
      />
      <Route path="/player/:id" element={<PlayerPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
