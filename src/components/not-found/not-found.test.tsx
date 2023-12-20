import { render, screen } from '@testing-library/react';
import {NotFound} from './not-found';
import {withRouter} from '../../utils/mocks/mock-components';

describe('component: not-found tests', () => {
  it('should render correctly', () => {
    render(withRouter(<NotFound />));
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });
});
