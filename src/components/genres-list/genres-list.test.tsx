import {describe} from 'vitest';
import {withStore} from '../../utils/mocks/mock-components';
import {GenresList} from './genres-list';
import {ReducerName} from '../../store/reducers/reducer-types';
import {render, screen} from '@testing-library/react';
import {ALL_GENRES} from '../../consts';
import {MOCK_FILM} from '../../utils/mocks/films';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../utils/utils';
import {setGenreFilter} from '../../store/action';

describe('Component: GenreList', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<GenresList/>, {
      [ReducerName.Film]: {
        genres: [ALL_GENRES, MOCK_FILM.genre]
      }
    });

    render(withStoreComponent);

    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILM.genre)).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const film = MOCK_FILM;
    const {withStoreComponent, mockStore} = withStore(<GenresList/>, {
      [ReducerName.Film]: {
        genres: [ALL_GENRES, film.genre]
      }
    });

    render(withStoreComponent);

    await userEvent.click(
      screen.getByTestId(`button-genre-${film.genre}`)
    );
    const actions = mockStore.getActions();
    expect(extractActionsTypes(actions)).toEqual([
      setGenreFilter.type
    ]);
    expect((actions.at(0) as ReturnType<typeof setGenreFilter>).payload).toBe(film.genre);
  });
});
