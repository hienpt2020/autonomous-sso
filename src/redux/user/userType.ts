export interface UserState {
  accessToken?: string,
  expiresIn?: number,
  redirectUri?: string,
  refreshToken?: string,
  scope?: string,
  tokenType?: string,
  userId?: number
}

export const USER_REQUEST_LOGIN = 'USER_REQUEST_LOGIN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
