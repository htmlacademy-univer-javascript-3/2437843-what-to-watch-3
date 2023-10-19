import {Navigate} from 'react-router-dom';
import {JSX} from 'react';


type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute({children} : PrivateRouteProps){
  const authorized = false;
  return authorized ? children : <Navigate to={'/login'}/>;
}
