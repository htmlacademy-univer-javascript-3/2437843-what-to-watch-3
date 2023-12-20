import {describe} from 'vitest';
import {withStore} from '../../utils/mocks/mock-components';
import {render, screen} from '@testing-library/react';
import {MOCK_FILM, MOCK_FILMS_LIST} from '../../utils/mocks/films';
import {AddToFavoriteButton} from './add-to-favorite-button';
import {ReducerName} from '../../store/reducers/reducer-types';
import {extractActionsTypes} from '../../utils/utils';
import {setFavoriteStatus} from '../../store/api/api-actions';
import userEvent from '@testing-library/user-event';

describe('add-my-list-button tests', () => {

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <AddToFavoriteButton filmId={MOCK_FILM.id} status={MOCK_FILM.isFavorite} />
    );
    render(withStoreComponent);
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('should correctly display my list films count', () => {
    const {withStoreComponent} = withStore(
      <AddToFavoriteButton filmId={MOCK_FILM.id} status={MOCK_FILM.isFavorite} />
      , {
        [ReducerName.Film]: {
          favoriteFilms: MOCK_FILMS_LIST.slice(0, 3)
        }
      });
    render(withStoreComponent);
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it('should render correctly isFavorite', () => {
    const {withStoreComponent} = withStore(
      <AddToFavoriteButton filmId={MOCK_FILM.id} status />
      , {
        [ReducerName.Film]: {
          favoriteFilms: MOCK_FILMS_LIST.slice(0, 1)
        }
      });
    render(withStoreComponent);
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const film = MOCK_FILM;
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(
      <AddToFavoriteButton filmId={film.id} status={film.isFavorite} />
    );

    mockAxiosAdapter.onPost('/favorite/1/0').reply(200, {...film, isFavorite: true});
    mockAxiosAdapter.onPost('/favorite/1/1').reply(200, {...film, isFavorite: true});

    render(withStoreComponent);

    expect(screen.getByTestId('add')).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole('button')
    );
    const actions = extractActionsTypes(mockStore.getActions());
    expect(actions).toEqual([
      setFavoriteStatus.pending.type,
      setFavoriteStatus.fulfilled.type
    ]);
  });
});
