import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {AddReviewPage} from './add-review-page';
import {render, screen} from '@testing-library/react';
import {ReducerName} from '../../../store/reducers/reducer-types';
import {MOCK_FILM} from '../../../utils/mocks/films';
import {Route, Routes} from 'react-router-dom';

describe('Component: AddReview page', () => {
  it('should render correctly when not found', () => {
    const {withStoreComponent} = withStore(withRouter(<AddReviewPage/>),{
      [ReducerName.Film]: {
        selectedFilm: null
      }
    });

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withRouter(
      <Routes>
        <Route path="/:id" element={<AddReviewPage/>}/>
      </Routes>
      , ['/1']), {
      [ReducerName.Film]: {
        selectedFilm: MOCK_FILM
      }
    });

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByTestId('stars-component')).toBeInTheDocument();
  });
});
