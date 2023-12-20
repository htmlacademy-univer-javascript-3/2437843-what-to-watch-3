import { render, screen } from '@testing-library/react';
import {MOCK_FILMS_LIST} from '../../utils/mocks/films';
import {FilmsListWithShowMore} from './films-list-with-show-more';
import {expect} from 'vitest';
import {withRouter} from '../../utils/mocks/mock-components';

describe('films-list tests', () => {
  it('should render correctly', () => {
    render(withRouter(
      <FilmsListWithShowMore films={MOCK_FILMS_LIST}/>
    ));
    expect(screen.getByText(MOCK_FILMS_LIST[0].name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_FILMS_LIST[7].name)).toBeInTheDocument();
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
