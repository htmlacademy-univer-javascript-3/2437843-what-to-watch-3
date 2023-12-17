import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {AuthStatus} from '../../types/auth-status';
import {ReducerName} from '../../store/reducers/reducer-types';


type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute({children} : PrivateRouteProps){
  const authStatus = useAppSelector((store) => store[ReducerName.Auth].authorizationStatus);
  return authStatus !== AuthStatus.NoAuthorized ? children : <Navigate to={'/login'}/>;
}
