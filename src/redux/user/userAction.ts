import User from 'src/models/User';
import { UserState, ACTION_SET_USER_PROFILE, ACTION_CLEAR_USER_PROFILE } from './userType';

export interface UserLoggedInAction {
  type: typeof ACTION_SET_USER_PROFILE;
  payload: User
}

export interface UserLoggedOutAction {
  type: typeof ACTION_CLEAR_USER_PROFILE;
}

export function createClearUserProfileAction(): UserLoggedOutAction {
  return {
    type: ACTION_CLEAR_USER_PROFILE
  }
}
export function createSetUserProfileAction(userProfile: User): UserLoggedInAction {
  return {
    type: ACTION_SET_USER_PROFILE,
    payload: {
      ...userProfile
    }
  }
}
export type UserAction = UserLoggedInAction | UserLoggedOutAction 