import {configureStore} from '@reduxjs/toolkit';
import {updateStore} from './reducer';
import {createAPI} from './api/api';

export const api = createAPI();
export const store = configureStore({
  reducer: updateStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
export type AppDispatch = typeof store.dispatch