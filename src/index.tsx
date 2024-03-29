import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuth, fetchFavoriteFilms, fetchFilms, fetchPromo} from './store/api/api-actions';
import {BrowserRouter} from 'react-router-dom';
import 'react-simple-toasts/dist/theme/dark-edge.css';
import {toastConfig} from 'react-simple-toasts';

toastConfig({ theme: 'dark-edge' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(checkAuth());
store.dispatch(fetchFavoriteFilms());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
