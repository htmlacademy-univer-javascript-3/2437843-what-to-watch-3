import { render, screen } from '@testing-library/react';
import {PlayIcon} from './play-icon';
describe('play-icon tests', () => {
  it('should render correctly', () => {
    render(<PlayIcon/>);
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
