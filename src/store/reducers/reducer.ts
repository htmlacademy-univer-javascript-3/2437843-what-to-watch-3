import {combineReducers} from '@reduxjs/toolkit';
import {filmReducer} from './film-reducer/film-reducer';
import {ReducerName} from './reducer-types';
import {authReducer} from './auth-reducer/auth-reducer';

export const reducer = combineReducers({
  [ReducerName.Film]: filmReducer.reducer,
  [ReducerName.Auth]: authReducer.reducer,
});
