import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REQUEST_LOGIN } from './userType';

export interface RequestLoginAction {
  type: typeof USER_REQUEST_LOGIN;
  payload: {
    email: string, 
    password: string 
  }
}
export interface LoginAction {
  type: typeof USER_LOGGED_IN;
  payload: object
}

export interface LogoutAction {
  type: typeof USER_LOGGED_OUT;
}

export function createLoginAction(email: string, password: string) : RequestLoginAction{
  return {
    type: USER_REQUEST_LOGIN, 
    payload: {
      email,
      password
    }
  }
}
export type UserAction = LoginAction | LogoutAction;
