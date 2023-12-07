import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {AuthStatus} from '../../types/auth-status';


type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute({children} : PrivateRouteProps){
  const authStatus = useAppSelector((store) => store.authorizationStatus);
  return authStatus === AuthStatus.Authorized ? children : <Navigate to={'/login'}/>;
}
