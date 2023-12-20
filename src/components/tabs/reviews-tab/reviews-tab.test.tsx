import { render, screen } from '@testing-library/react';
import reviews from '../../../utils/mocks/reviews';
import {ReviewsTab} from './reviews-tab';


describe('reviews tab tests', () => {
  it('should render correctly', () => {
    render(<ReviewsTab reviews={reviews}/>);
    expect(screen.getByText(reviews[0].user)).toBeInTheDocument();
    expect(screen.getByText(reviews[0].comment)).toBeInTheDocument();
    expect(screen.getByText(reviews[0].rating)).toBeInTheDocument();
    expect(screen.getByText(reviews[1].comment)).toBeInTheDocument();
  });
});
