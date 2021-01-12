import { UserState, USER_LOGGED_IN, USER_LOGGED_OUT, USER_INVALID_TOKEN } from './userType';
import { UserAction } from './userAction';

const initialState: UserState = {
  isValidToken: false   
};

export function userReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isValidToken: true,
        ...action.payload,
      };

    case USER_LOGGED_OUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
