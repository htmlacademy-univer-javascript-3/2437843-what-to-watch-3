
import {render, screen} from '@testing-library/react';
import {MOCK_FILM} from '../../utils/mocks/films';
import {FilmCard} from './film-card';
import {withRouter} from '../../utils/mocks/mock-components';

const mockFilm = MOCK_FILM;
describe('small-film-card tests', () => {
  it('should render correctly', () => {
    render(withRouter(
      <FilmCard
        film={mockFilm}
        onMouseEnter={() => 0}
        onMouseLeave={() => 0}
      />));
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });
});
