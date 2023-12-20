import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {MOCK_FILMS_LIST} from '../../../utils/mocks/films';
import {MyListPage} from './my-list-page';
import {ReducerName} from '../../../store/reducers/reducer-types';


describe('Component: MyList', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withRouter(<MyListPage/>), {
      [ReducerName.Film]: {
        favoriteFilms: MOCK_FILMS_LIST
      }
    });

    render(withStoreComponent);

    expect(screen.queryByText(MOCK_FILMS_LIST[0].name)).toBeInTheDocument();
    expect(screen.queryByText(MOCK_FILMS_LIST[1].name)).toBeInTheDocument();
    expect(screen.queryByText(MOCK_FILMS_LIST[5].name)).toBeInTheDocument();
  });
});
