import {MainPage} from './components/pages/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MoviePage} from './components/pages/movie-page';
import {AddReviewPage} from './components/pages/add-review-page';
import {PlayerPage} from './components/pages/player-page';
import {NotFound} from './components/pages/not-found';
import {SignInPage} from './components/pages/sign-in-page';
import {PrivateRoute} from './components/routes/private-route';
import {MyListPage} from './components/pages/my-list-page';


export function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
