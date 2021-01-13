import { UserState, USER_LOGGED_IN, USER_LOGGED_OUT } from './userType';

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
