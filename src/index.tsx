import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import {Film} from './types/film';
import {MOCK_FILMS} from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PROMO_FILM: Film = MOCK_FILMS[0];

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mainPageParams={{promoFilm: PROMO_FILM, filmsList: MOCK_FILMS}} mockFilms={MOCK_FILMS}/>
    </Provider>
  </React.StrictMode>
);
