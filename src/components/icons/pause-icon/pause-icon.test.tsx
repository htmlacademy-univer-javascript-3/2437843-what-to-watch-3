import { render, screen } from '@testing-library/react';
import {PauseIcon} from './pause-icon';
describe('pause-icon tests', () => {
  it('should render correctly', () => {
    render(<PauseIcon/>);
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});
