import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Loader} from './loader';

describe('Component: Loader', () => {
  it('should render correct', () => {
    const valueTestId = 'spinner-loader';
    render(<Loader />);
    const spinner = screen.getByTestId(valueTestId);
    expect(spinner).toBeInTheDocument();
  });
});
