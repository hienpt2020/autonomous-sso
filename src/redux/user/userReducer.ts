import { UserState, USER_LOGGED_IN, USER_LOGGED_OUT } from './userType';
import { UserAction } from './userAction';

const initialState: UserState = {
    
};

export function requestReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
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
