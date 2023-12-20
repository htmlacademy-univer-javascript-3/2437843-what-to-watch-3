import {JSX} from 'react';
import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../store/api/api';
import {RootState} from '../../store';
import thunk from 'redux-thunk';
import {Action} from '@reduxjs/toolkit';
import {AppThunkDispatch} from './mocks';
import {Provider} from 'react-redux';
import {InitialEntry} from '@remix-run/router';
import {MemoryRouter} from 'react-router-dom';
import {ReducerName} from '../../store/reducers/reducer-types';
import {FilmReducerState} from '../../types/reducers/film-reducer-state';
import {AuthReducerState} from '../../types/reducers/auth-reducer-state';
import {AuthStatus} from '../../types/auth-status';
import {ALL_GENRES} from '../../consts';
import {MOCK_FILM} from './films';

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

type PartialStore = {
  [ReducerName.Auth]?: Partial<AuthReducerState>;
  [ReducerName.Film]?: Partial<FilmReducerState>;
}

export const getRootState = (authStatus: AuthStatus): RootState => (
  {
    [ReducerName.Auth]:
      {authorizationStatus: authStatus, userInfo: null, authError: null},
    [ReducerName.Film]: {
      selectedFilm: MOCK_FILM,
      genreFilter: ALL_GENRES,
      genreFilteredFilms: [],
      films: [],
      similarFilms: [],
      genres: [ALL_GENRES],
      isLoading: false,
      promoFilm: MOCK_FILM,
      reviews: [],
      favoriteFilms: [],
    }
  }
);

export function withStore(
  component: JSX.Element,
  initialState: PartialStore = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<RootState, Action<string>, AppThunkDispatch>(middleware);
  const fakeStore = getRootState(AuthStatus.NoAuthorized);
  if (initialState[ReducerName.Auth]){
    fakeStore[ReducerName.Auth] = {...fakeStore[ReducerName.Auth], ...initialState[ReducerName.Auth]};
  }
  if (initialState[ReducerName.Film]){
    fakeStore[ReducerName.Film] = {...fakeStore[ReducerName.Film], ...initialState[ReducerName.Film]};
  }
  const mockStore = mockStoreCreator(fakeStore);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

export function withRouter(
  component: JSX.Element,
  initialEntries?: InitialEntry[]
): JSX.Element {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
}


