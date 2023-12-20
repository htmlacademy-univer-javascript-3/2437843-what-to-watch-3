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

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<RootState> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<RootState, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

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
