import {describe} from 'vitest';
import {AuthReducerState} from '../../../types/reducers/auth-reducer-state';
import {AuthStatus} from '../../../types/auth-status';
import {authReducer} from './auth-reducer';
import {checkAuth, login, logout} from '../../api/api-actions';
import {User} from '../../../types/user';
import {setAuthError} from '../../action';

const MOCK_USER: User = {email: 'test@test.ru', avatarUrl: 'some/path/to/image', name: 'test', token: 'testtest'};
const MOCK_ERROR_MESSAGE = 'Some example error';
describe('Auth reducer slice tests', () => {
  let state: AuthReducerState;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthStatus.Unknown,
      authError: null,
      userInfo: null
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(authReducer.reducer(void 0, { type: '' }))
      .toEqual({
        authorizationStatus: AuthStatus.Unknown,
        authError: null,
        userInfo: null
      });
  });

  describe('login test', () => {
    it('should set authorizationStatus Authorized on fulfilled', () => {
      expect(authReducer.reducer(state, {type: login.fulfilled.type, payload: MOCK_USER}).authorizationStatus)
        .toEqual(AuthStatus.Authorized);
    });
    it('should set userInfo on fulfilled', () => {
      expect(authReducer.reducer(state, {type: login.fulfilled.type, payload: MOCK_USER}).userInfo)
        .toEqual(MOCK_USER);
    });
    it('should set error on rejected', () => {
      expect(authReducer.reducer(state, {type: login.rejected.type, error: {message: MOCK_ERROR_MESSAGE}}).authError)
        .toEqual(MOCK_ERROR_MESSAGE);
    });
    it('should not set Authorized on rejected', () => {
      expect(authReducer.reducer(state, {type: login.rejected.type, error:  {message: MOCK_ERROR_MESSAGE}}).authorizationStatus)
        .toEqual(AuthStatus.Unknown);
    });
  });

  describe('logout test', () => {
    it('should set userInfo null on fulfilled', () => {
      state.userInfo = MOCK_USER;
      expect(authReducer.reducer(state, { type: logout.fulfilled.type}).userInfo)
        .toEqual(null);
    });
    it('should set authorizationStatus NoAuthorized on fulfilled', () => {
      expect(authReducer.reducer(state, {type: logout.fulfilled.type}).authorizationStatus)
        .toEqual(AuthStatus.NoAuthorized);
    });
  });

  describe('checkAuth test', () => {
    it('should set userInfo on fulfilled', () => {
      expect(authReducer.reducer(state, { type: checkAuth.fulfilled.type, payload: MOCK_USER }).userInfo)
        .toMatchObject(MOCK_USER);
    });
    it('should set authorizationStatus Authorized on fulfilled', () => {
      expect(authReducer.reducer(state, {type: checkAuth.fulfilled.type, payload: MOCK_USER}).authorizationStatus)
        .toEqual(AuthStatus.Authorized);
    });
    it('should set authorizationStatus NoAuthorized on rejected', () => {
      expect(authReducer.reducer(state, {type: checkAuth.rejected.type}).authorizationStatus)
        .toEqual(AuthStatus.NoAuthorized);
    });
  });

  describe('setAuthError test', () => {
    it('should set set authError', () => {
      expect(authReducer.reducer(state, { type: setAuthError.type, payload: MOCK_ERROR_MESSAGE }).authError)
        .toMatchObject(MOCK_ERROR_MESSAGE);
    });
    it('should clear authError', () => {
      state.authError = MOCK_ERROR_MESSAGE;
      expect(authReducer.reducer(state, {type: setAuthError.type, payload: null}).authError)
        .toEqual(null);
    });
  });

});
