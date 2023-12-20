import { render, screen } from '@testing-library/react';
import {Footer} from './footer';
import {withRouter} from '../../utils/mocks/mock-components';

describe('footer tests', () => {
  it('should render correctly', () => {
    render(withRouter(<Footer />));
    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
