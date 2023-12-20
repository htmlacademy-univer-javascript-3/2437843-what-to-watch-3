import { render, screen } from '@testing-library/react';
import {Tabs} from './tabs';
import {MOCK_FILM} from '../../utils/mocks/films';
import reviews from '../../utils/mocks/reviews';

const mockFilm = MOCK_FILM;

describe('tabs tests', () => {
  it('should render correctly', () => {
    render(<Tabs film={mockFilm} reviews={reviews}/>);
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText(mockFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });
});
