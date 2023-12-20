import {describe} from 'vitest';
import {getRootState, withRouter, withStore} from '../../utils/mocks/mock-components';
import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {render, screen} from '@testing-library/react';
import {AuthStatus} from '../../types/auth-status';

const initialEntries = ['/'];
describe('private-route tests', () => {
  beforeEach(() => {
    initialEntries.push('/private');
  });

  it('should render login when not authorized', () => {
    const component = withRouter(
      <Routes>
        <Route path='/login' element={<h1>public</h1>}/>
        <Route path='/private' element={
          <PrivateRoute >
            <h1>private</h1>
          </PrivateRoute>
        }
        />
      </Routes>,
      initialEntries
    );
    const {withStoreComponent} = withStore(component);
    render(withStoreComponent);
    expect(screen.getByText(/public/i)).toBeInTheDocument();
    expect(screen.queryByText(/private/i)).not.toBeInTheDocument();
  });

  it('should render private route when authorized', () => {
    const component = withRouter(
      <Routes>
        <Route path='/login' element={<h1>public</h1>}/>
        <Route path='/private' element={
          <PrivateRoute >
            <h1>private</h1>
          </PrivateRoute>
        }
        />
      </Routes>,
      initialEntries
    );
    const {withStoreComponent} = withStore(component, getRootState(AuthStatus.Authorized));
    render(withStoreComponent);
    expect(screen.getByText(/private/i)).toBeInTheDocument();
    expect(screen.queryByText(/public/i)).not.toBeInTheDocument();
  });
});
