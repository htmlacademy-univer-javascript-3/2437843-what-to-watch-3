import {withRouter, withStore} from '../../utils/mocks/mock-components';
import {Header} from './header';
import {render, screen} from '@testing-library/react';
import {AuthStatus} from '../../types/auth-status';
import {ReducerName} from '../../store/reducers/reducer-types';
import {MOCK_USER} from '../../utils/mocks/user';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../utils/utils';
import {logout} from '../../store/api/api-actions';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withRouter(<Header/>));

    render(withStoreComponent);

    expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
  });

  it('should render sign out', () => {
    const {withStoreComponent} = withStore(withRouter(<Header/>), {
      [ReducerName.Auth]: {
        userInfo: MOCK_USER,
        authorizationStatus: AuthStatus.Authorized,
      }
    });

    render(withStoreComponent);

    expect(screen.queryByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should handle logout correctly', async () => {
    const {withStoreComponent, mockStore} = withStore(withRouter(<Header/>), {
      [ReducerName.Auth]: {
        userInfo: MOCK_USER,
        authorizationStatus: AuthStatus.Authorized,
      }
    });

    render(withStoreComponent);

    await userEvent.click(screen.getByText(/sign out/i));

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      logout.pending.type,
      logout.rejected.type
    ]);
  });
});
