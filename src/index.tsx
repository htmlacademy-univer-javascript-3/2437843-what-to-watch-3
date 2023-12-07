import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuth, fetchFilms, fetchPromo} from './store/api/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
