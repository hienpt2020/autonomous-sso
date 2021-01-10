export interface UserState {
  accessToken?: string,
  expiresIn?: number,
  redirectUri?: string,
  refreshToken?: string,
  scope?: string,
  tokenType?: string,
  userId?: number,
  isValidToken?: boolean,
  //User information
  dateCreated?: string,
  dateModified?: string,
  email?: string,
  status?: string,
  fullName?: string,
  address?: string,
  userAvatar?: string,
  phone?: string,
  code?: string,
  referralCode?: string,
  accountBirthday?: string,
  source?: string,
  isVerifiedEmail?: string,
}

//action to reducer
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
//actions for middleware
export const USER_INVALID_TOKEN = 'USER_INVALID_TOKEN';
export const VALIDATE_USER_TOKEN = 'VALIDATE_USER_TOKEN';
export const USER_REQUEST_LOGIN = 'USER_REQUEST_LOGIN';

export const REQUEST_LOGIN_ACTION = 'REQUEST_LOGIN_ACTION';
export const REQUEST_LOGOUT_ACTION = 'REQUEST_LOGOUT_ACTION';
export const REQUEST_VALIDATE_ACCESS_TOKEN = 'REQUEST_VALIDATE_ACCESS_TOKEN';

export const KEY_ACCESS_TOKEN = 'KEY_ACCESS_TOKEN';

