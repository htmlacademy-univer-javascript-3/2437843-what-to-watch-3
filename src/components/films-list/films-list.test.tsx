import { render, screen } from '@testing-library/react';
import {FilmsList} from './films-list';
import {MOCK_FILMS_LIST} from '../../utils/mocks/films';
import {withRouter} from '../../utils/mocks/mock-components';

describe('films-list tests', () => {
  it('should render correctly', () => {
    render(withRouter(
      <FilmsList films={MOCK_FILMS_LIST}/>
    ));
    expect(screen.getByText(MOCK_FILMS_LIST[0].name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILMS_LIST[7].name)).toBeInTheDocument();
  });
});
