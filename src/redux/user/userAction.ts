import { USER_LOGGED_IN, USER_LOGGED_OUT, REQUEST_LOGIN_ACTION, REQUEST_LOGOUT_ACTION, USER_INVALID_TOKEN, VALIDATE_USER_TOKEN, REQUEST_VALIDATE_ACCESS_TOKEN, UserState } from './userType';

export interface UserLoggedInAction {
  type: typeof USER_LOGGED_IN;
  payload: UserState
}

export interface UserLoggedOutAction {
  type: typeof USER_LOGGED_OUT;
}

export function createLogoutAction(): UserLoggedOutAction {
  return {
    type: USER_LOGGED_OUT
  }
}
export function createLoginAction(userProfile: any): UserLoggedInAction {
  console.log("hitle", userProfile)
  return {
    type: USER_LOGGED_IN,
    payload: {
      dateCreated: userProfile.date_created,
      dateModified: userProfile.date_modified,
      email: userProfile.email,
      status: userProfile.status,
      fullName: userProfile.full_name,
      address: userProfile.address,
      userAvatar: userProfile.user_avatar,
      phone: userProfile.phone,
      code: userProfile.code,
      referralCode: userProfile.referral_code,
      accountBirthday: userProfile.account_birthday,
      source: userProfile.source,
      isVerifiedEmail: userProfile.is_verified_email,
      accessToken: userProfile.accessToken,
    }
  }
}

export function createRequestLoginAction(email: string, password: string): any {
  return {
    type: REQUEST_LOGIN_ACTION,
    payload: {
      email,
      password
    }
  }
}

export function createRequestLogoutAction(): object {
  return {
    type: REQUEST_LOGOUT_ACTION
  }
}
export function requestValidateAccessTokenAction(): object {
  return {
    type: REQUEST_VALIDATE_ACCESS_TOKEN
  }
}
