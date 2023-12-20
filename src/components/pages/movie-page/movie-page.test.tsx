import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {MoviePage} from './movie-page';
import {MOCK_FILM} from '../../../utils/mocks/films';
import {Route, Routes} from 'react-router-dom';


describe('Component: MoviePage', () => {
  it('should render correctly not found', () => {
    const {withStoreComponent} = withStore(withRouter(<MoviePage/>));

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withRouter(
      <Routes>
        <Route path="/:id" element={<MoviePage/>}/>
      </Routes>, ['/1']));

    render(withStoreComponent);

    expect(screen.getByText(MOCK_FILM.name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILM.genre)).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILM.released)).toBeInTheDocument();
  });
});
