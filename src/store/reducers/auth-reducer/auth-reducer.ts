import {createSlice} from '@reduxjs/toolkit';
import {ReducerName} from '../reducer-types';
import {setAuthError} from '../../action';
import {
  checkAuth,
  login, logout
} from '../../api/api-actions';
import {AuthStatus} from '../../../types/auth-status';
import {AuthReducerState} from '../../../types/reducers/auth-reducer-state';
import {removeToken, setToken} from '../../../utils/token-storage';

const initialState: AuthReducerState = {
  authorizationStatus: AuthStatus.Unknown,
  userInfo: null,
  authError: null,
};

export const authReducer = createSlice({
  name: ReducerName.Auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuthorized;
      })
      .addCase(checkAuth.fulfilled, (state, action)=> {
        state.authorizationStatus = AuthStatus.Authorized;
        state.userInfo = action.payload;
        setToken(action.payload.token);
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuthorized;
        state.userInfo = null;
        removeToken();
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorized;
        state.userInfo = action.payload;
        setToken(action.payload.token);
      })
      .addCase(login.rejected, (state, action)=> {
        if (action.payload) {
          state.authError = action.payload.details.map((item) => item.messages).join('\n');
        } else {
          state.authError = action.error.message;
        }
      })
      .addCase(setAuthError, (state, {payload}) => {
        state.authError = payload;
      });
  },
});
