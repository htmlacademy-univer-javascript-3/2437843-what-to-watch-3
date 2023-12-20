import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withRouter, withStore} from '../../../utils/mocks/mock-components';
import {SignInPage} from './sign-in-page';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../../utils/utils';
import {setAuthError} from '../../../store/action';
import {MOCK_USER} from '../../../utils/mocks/user';
import {login} from '../../../store/api/api-actions';


describe('Component: SignIn page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withRouter(<SignInPage/>));

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display data correctly', async () => {
    const {withStoreComponent} = withStore(withRouter(<SignInPage/>));

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'chipichipi'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'chapachapa'
    );

    expect(screen.getByDisplayValue(/chipichipi/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/chapachapa/i)).toBeInTheDocument();
  });

  it('should not send request when invalid', async () => {
    const {withStoreComponent, mockStore} = withStore(withRouter(<SignInPage/>));

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'chipichipi'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'chapachapa'
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([setAuthError.type]);
  });


  it('should send request', async () => {
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(withRouter(<SignInPage/>));
    mockAxiosAdapter.onPost('/login').reply(200, MOCK_USER);

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'amail@amail.com'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'dadas0dasdasd'
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      setAuthError.type,
      login.pending.type,
      login.fulfilled.type,
    ]);
  });
});
