import {Link} from 'react-router-dom';
import {JSX} from 'react';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {AuthStatus} from '../../types/auth-status';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {logout} from '../../store/api/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/reducers/auth-reducer/selectors';


type HeaderProps = {
  children?: JSX.Element;
}
export function Header({children}:HeaderProps){
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {children}
        <ul className="user-block">
          {authStatus === AuthStatus.Authorized && user && (
            <>
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to={'/mylist'}>
                    <img src={user.avatarUrl} alt={user.name} width="63" height="63"/>
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" onClick={handleLogoutClick}>Sign out</a>
              </li>
            </>)}
          {authStatus === AuthStatus.NoAuthorized &&
            (<Link to={'/login'} className="user-block__link">Sign in</Link>)}

        </ul>
      </header>
    </>
  );
}
