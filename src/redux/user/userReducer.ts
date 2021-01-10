import { UserState, USER_LOGGED_IN, USER_LOGGED_OUT, SET_INVALID_USER_TOKEN } from './userType';
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
    case USER_LOGGED_OUT:
      return {
        ...initialState
      };
    case SET_INVALID_USER_TOKEN:
      return {
        ...state, 
        accessToken: undefined, 
        isValidToken: false
      };

    default:
      return state;
  }
}
