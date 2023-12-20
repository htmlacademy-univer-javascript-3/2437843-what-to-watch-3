import { render, screen } from '@testing-library/react';
import {ReviewCard} from './review-card';
import reviews from '../../utils/mocks/reviews';


describe('reviews card tests', () => {
  it('should render correctly', () => {
    render(<ReviewCard review={reviews[0]}/>);
    expect(screen.getByText(reviews[0].user)).toBeInTheDocument();
    expect(screen.getByText(reviews[0].comment)).toBeInTheDocument();
    expect(screen.getByText(reviews[0].rating)).toBeInTheDocument();
  });
});
