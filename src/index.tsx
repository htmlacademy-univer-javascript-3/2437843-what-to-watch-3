import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import {Film} from './types/film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PROMO_FILM: Film = {
  poster: 'img/bg-the-grand-budapest-hotel.jpg',
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: new Date('02.06.2014')
};

root.render(
  <React.StrictMode>
    <App mainPageParams={{promoFilm: PROMO_FILM}}/>
  </React.StrictMode>
);
