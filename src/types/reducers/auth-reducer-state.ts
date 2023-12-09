import {AuthStatus} from '../auth-status';
import {User} from '../user';

export type AuthReducerState = {
  authorizationStatus: AuthStatus;
  userInfo: User | null;
  authError: string | null | undefined;
}
