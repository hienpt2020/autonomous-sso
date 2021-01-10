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

export const USER_REQUEST_LOGIN = 'USER_REQUEST_LOGIN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const SET_INVALID_USER_TOKEN = 'SET_INVALID_USER_TOKEN';
export const VALIDATE_USER_TOKEN = 'VALIDATE_USER_TOKEN';
