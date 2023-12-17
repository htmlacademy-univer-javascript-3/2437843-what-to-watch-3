import { render, screen } from '@testing-library/react';
import {OverviewTab} from './overview-tab';
import {MOCK_FILM} from '../../../utils/mocks/films';


const mockFilm = MOCK_FILM;
describe('overview tests', () => {
  it('should render correctly', () => {
    render(<OverviewTab film={mockFilm}/>);
    expect(screen.getByText(mockFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });
});
