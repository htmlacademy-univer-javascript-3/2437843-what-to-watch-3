import {render, screen} from '@testing-library/react';
import {AuthStatus} from '../../types/auth-status';
import {getRootState, withRouter, withStore} from '../../utils/mocks/mock-components';
import {App} from './app';
import {MOCK_FILM} from '../../utils/mocks/films';
import {RootState} from '../../store';


const mockFilm = MOCK_FILM;


describe('logged in routing', () => {
  const state: RootState = getRootState(AuthStatus.Authorized);

  const routes = ['/'];

  const {withStoreComponent: fakeApp} = withStore(withRouter(<App/>, routes), state);

  it('should render main page when navigated to "/"', () => {
    render(fakeApp);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render main page when navigated to "/login"', () => {
    routes.push('/login');
    render(fakeApp);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render film page when navigated to "/films/{id}"', () => {
    routes.push('/films/1');
    render(fakeApp);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render player when navigated to "/player/{id}"', () => {
    routes.push('/player/1');
    render(fakeApp);
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it('should render reviews editor when navigated to "/films/{id}/review"', () => {
    routes.push('/films/1/review');
    render(fakeApp);
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should render favorites list when navigated to "/mylist"', () => {
    routes.push('/mylist');
    render(fakeApp);
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it('should render not found when navigated to non-existent route', () => {
    routes.push('/ajkrejkhnsfdg');
    render(fakeApp);
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });
});

describe('not logged in routing', () => {
  const state = getRootState(AuthStatus.NoAuthorized);
  const routes = ['/'];
  const {withStoreComponent: fakeApp} = withStore(withRouter(<App/>, routes), state);

  it('should render main page when navigated to "/"', () => {
    render(fakeApp);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render login page when navigated to "/login"', () => {
    routes.push('/login');
    render(fakeApp);
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render film page when navigated to "/films/{id}"', () => {
    routes.push('/films/1');
    render(fakeApp);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render player when navigated to "/player/{id}"', () => {
    routes.push('/player/1');
    render(fakeApp);
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it('should render not found when navigated to non-existent route', () => {
    routes.push('/qwsdfertasdsgdsfdfg');
    render(fakeApp);
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });
});
