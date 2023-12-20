import {RootState} from '../../index';
import {ReducerName} from '../reducer-types';

export const getUser = (state: RootState) => state[ReducerName.Auth].userInfo;
export const getAuthError = (state: RootState) => state[ReducerName.Auth].authError;
export const getAuthorizationStatus = (state: RootState) => state[ReducerName.Auth].authorizationStatus;
