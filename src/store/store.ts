import {configureStore} from '@reduxjs/toolkit';
import {updateStore} from './reducer';

export const store = configureStore({reducer: updateStore});
export type AppDispatch = typeof store.dispatch
