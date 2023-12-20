import { render, screen } from '@testing-library/react';
import {MOCK_FILM} from '../../../utils/mocks/films';
import {DetailsTab} from './details-tab';

const mockFilm = MOCK_FILM;

describe('details tests', () => {
  it('should render correctly', () => {
    render(<DetailsTab film={mockFilm}/>);
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilm.runTime}m`)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.starring[0])).toBeInTheDocument();
    expect(screen.getByText(mockFilm.released)).toBeInTheDocument();
  });
});
