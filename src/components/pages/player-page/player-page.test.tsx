import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {Route, Routes} from 'react-router-dom';
import {PlayerPage} from './player-page';


describe('Component: PlayerPage', () => {
  it('should render correctly not found', () => {
    const {withStoreComponent} = withStore(withRouter(<PlayerPage/>));

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withRouter(
      <Routes>
        <Route path="/:id" element={<PlayerPage/>}/>
      </Routes>, ['/1']));

    render(withStoreComponent);

    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
