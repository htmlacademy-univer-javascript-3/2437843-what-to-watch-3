import {Footer} from '../../footer/footer';
import {Header} from '../../header/header';
import {FormEvent, useEffect, useState} from 'react';
import {useAppDispatch} from '../../../store/hooks/use-app-dispatch';
import {useAppSelector} from '../../../store/hooks/use-app-selector';
import {AuthStatus} from '../../../types/auth-status';
import {Navigate} from 'react-router-dom';
import {login} from '../../../store/api/api-actions';
import {setAuthError} from '../../../store/action';
import {getAuthError, getAuthorizationStatus} from '../../../store/reducers/auth-reducer/selectors';

export function SignInPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const error = useAppSelector(getAuthError);
  useEffect(() => {
    dispatch(setAuthError(null));
  }, [dispatch]);
  if (authStatus === AuthStatus.Authorized) {
    return <Navigate to={'/'}/>;
  }
  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password || isDisabled){
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
      dispatch(setAuthError('Email is not in valid format'));
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/g.test(password)){
      dispatch(setAuthError('Password must contain at least one digit and one letter'));
      return;
    }
    setIsDisabled(true);
    dispatch(login({email, password})).then(() => {
      setIsDisabled(false);
    }).catch(() => {
      setIsDisabled(false);
    });
  }

  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
        <form action="src/components/pages#" className="sign-in__form" onSubmit={handleFormSubmit}>
          {error && (
            <div className="sign-in__message">
              <p>{error}</p>
            </div>)}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" value={email} required onChange={(event) => setEmail(event.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" required value={password} onChange={(event) => setPassword(event.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={isDisabled}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
