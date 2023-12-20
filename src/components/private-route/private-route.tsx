import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {AuthStatus} from '../../types/auth-status';
import {getAuthorizationStatus} from '../../store/reducers/auth-reducer/selectors';


type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute({children} : PrivateRouteProps){
  const authStatus = useAppSelector(getAuthorizationStatus);
  return authStatus !== AuthStatus.NoAuthorized ? children : <Navigate to={'/login'}/>;
}
