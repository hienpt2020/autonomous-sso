import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REQUEST_LOGIN, SET_INVALID_USER_TOKEN, VALIDATE_USER_TOKEN } from './userType';

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
export interface SetInvalidUserToken {
  type: typeof SET_INVALID_USER_TOKEN;
}
export interface ValidateTokenAction {
  type: typeof VALIDATE_USER_TOKEN;
}

export function createLoginAction(email: string, password: string): RequestLoginAction {
  return {
    type: USER_REQUEST_LOGIN,
    payload: {
      email,
      password
    }
  }
}
export function createInvalidTokenAction(): SetInvalidUserToken {
  return {
    type: SET_INVALID_USER_TOKEN
  }
}

export function createValidateTokenAction(): ValidateTokenAction {
  return {
    type: VALIDATE_USER_TOKEN
  }
}
export type UserAction = LoginAction | LogoutAction | SetInvalidUserToken | ValidateTokenAction;
