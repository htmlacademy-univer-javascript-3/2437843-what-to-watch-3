import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {MainPage} from './main-page';
import {MOCK_FILM} from '../../../utils/mocks/films';

describe('Component: Main page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withRouter(<MainPage/>));

    render(withStoreComponent);

    expect(screen.getAllByText(MOCK_FILM.name)[0]).toBeInTheDocument();
    expect(screen.getAllByText(MOCK_FILM.genre)[0]).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILM.released)).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
