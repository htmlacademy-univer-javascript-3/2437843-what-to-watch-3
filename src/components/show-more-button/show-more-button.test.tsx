import { render, screen } from '@testing-library/react';
import {ShowMoreButton} from './show-more-button';
import {withRouter} from '../../utils/mocks/mock-components';

describe('show-more-button tests', () => {
  it('should render correctly', () => {
    render(withRouter(<ShowMoreButton onClick={() => 0} />));
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
