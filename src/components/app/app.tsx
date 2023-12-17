import {MainPage} from '../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {MoviePage} from '../pages/movie-page/movie-page';
import {AddReviewPage} from '../pages/add-review-page/add-review-page';
import {PlayerPage} from '../pages/player-page/player-page';
import {NotFound} from '../not-found/not-found';
import {SignInPage} from '../pages/sign-in-page/sign-in-page';
import {PrivateRoute} from '../private-route/private-route';
import {MyListPage} from '../pages/my-list-page/my-list-page';


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
