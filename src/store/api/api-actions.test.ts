import {describe} from 'vitest';
import {createAPI} from './api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {MOCK_FILM, MOCK_FILMS_LIST} from '../../utils/mocks/films';
import reviews from '../../utils/mocks/reviews';
import {AuthorizationData} from '../../types/auth-data';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {RootState} from '../index';
import {Action} from '@reduxjs/toolkit';
import {
  addReview,
  checkAuth, fetchFavoriteFilms,
  fetchFilm,
  fetchFilms,
  fetchPromo,
  fetchReviews,
  fetchSimilar,
  login,
  logout, setFavoriteStatus
} from './api-actions';
import {extractActionsTypes} from '../../utils/utils';

describe('async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockFilm = MOCK_FILM;
  const mockFilms = MOCK_FILMS_LIST;
  const mockReviews = reviews;
  const mockAuthorizationData: AuthorizationData = { email: 'test@test.ru', password: 'test' };

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);


  it('authorization status is Auth when server returned 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet('/login')
      .reply(200);

    expect(store.getActions() as Action<string>[]).toEqual([]);

    await store.dispatch(checkAuth());

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      checkAuth.pending.type,
      checkAuth.fulfilled.type
    ]);
  });

  it('should dispatch login when POST /login', async () => {
    mockAPI
      .onPost('/login')
      .reply(200, { token: 'token' });


    const store = mockStore();

    await store.dispatch(login(mockAuthorizationData));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      login.pending.type,
      login.fulfilled.type
    ]);
  });

  it('should dispatch logout on DELETE /logout', async () => {
    mockAPI
      .onDelete('/logout')
      .reply(204);

    const store = mockStore();

    await store.dispatch(logout());

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      logout.pending.type,
      logout.fulfilled.type
    ]);
  });

  it('should dispatch films when GET /films', async () => {
    mockAPI
      .onGet('/films')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFilms());

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchFilms.pending.type,
      fetchFilms.fulfilled.type
    ]);
  });

  it('should dispatch promo film when GET /promo', async () => {
    mockAPI
      .onGet('/promo')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchPromo());

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchPromo.pending.type,
      fetchPromo.fulfilled.type
    ]);
  });

  it('should fetch film when GET /films/{id}', async () => {
    mockAPI
      .onGet('/films/1')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchFilm('1'));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchFilm.pending.type,
      fetchFilm.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /films/{id}/similar', async () => {
    mockAPI
      .onGet('/films/1/similar')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchSimilar('1'));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchSimilar.pending.type,
      fetchSimilar.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /comments/{id}', async () => {
    mockAPI
      .onGet('/comments/1')
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviews('1'));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchReviews.pending.type,
      fetchReviews.fulfilled.type
    ]);
  });

  it('POST /comments/{id}', async () => {
    const postData = {
      filmId: '1',
      comment: 'comment',
      rating: 10,
    };

    mockAPI
      .onPost(`/comments/${postData.filmId}`, {
        comment: postData.comment,
        rating: postData.rating
      })
      .reply(200);

    const store = mockStore();

    await store.dispatch(addReview(postData));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      addReview.pending.type,
      addReview.fulfilled.type
    ]);
  });

  it('should fetch favorite films film when GET /favorite', async () => {
    mockAPI
      .onGet('/favorite')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteFilms());


    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      fetchFavoriteFilms.pending.type,
      fetchFavoriteFilms.fulfilled.type
    ]);
  });

  it('should set favorite status when POST /favorite/{filmId}/{status}', async () => {
    const postData = {
      filmId: '1',
      status: true
    };

    mockAPI
      .onPost('/favorite/1/1')
      .reply(200);

    const store = mockStore();

    await store.dispatch(setFavoriteStatus(postData));

    const actions = extractActionsTypes(store.getActions() as Action<string>[]);

    expect(actions).toEqual([
      setFavoriteStatus.pending.type,
      setFavoriteStatus.fulfilled.type
    ]);
  });
});
