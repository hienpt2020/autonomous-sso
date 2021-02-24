// Service
import { takeLatest } from 'redux-saga/effects';
import { requestLoginAction, requestLoginSocialAction } from './request/requestLoginAction';
import { requestLogoutAction } from './request/requestLogoutAction';
import { requestRegisterAction } from './request/requestRegisterAction';
import { validateUserToken } from './request/requestValidateUserToken';
import {
    REQUEST_LOGIN_ACTION,
    REQUEST_LOGOUT_ACTION,
    REQUEST_REGISTER_ACTION,
    REQUEST_VALIDATE_ACCESS_TOKEN,
    FETCH_USER_ACTION,
    REQUEST_LOGIN_SOCIAL_ACTION,
} from './userType';
import { fetchUserProfile } from './request/fetchUserData';
import { LOGIN_SOCIAL_TYPES } from 'src/common/constant';

export const userSaga = function* root() {
    yield takeLatest(REQUEST_LOGIN_ACTION, requestLoginAction);
    yield takeLatest(REQUEST_LOGOUT_ACTION, requestLogoutAction);
    yield takeLatest(REQUEST_VALIDATE_ACCESS_TOKEN, validateUserToken);
    yield takeLatest(REQUEST_REGISTER_ACTION, requestRegisterAction);
    yield takeLatest(FETCH_USER_ACTION, fetchUserProfile);
    yield takeLatest(REQUEST_LOGIN_SOCIAL_ACTION, requestLoginSocialAction);
};

export function createRequestRegisterAction(
    email: string,
    password: string,
    confirmPassword: string,
    joinWorkSpaceToken: string | undefined,
): any {
    return {
        type: REQUEST_REGISTER_ACTION,
        payload: {
            email,
            password,
            confirmPassword,
        },
        joinWorkSpaceToken,
    };
}
export function createRequestLoginAction(email: string, password: string): any {
    return {
        type: REQUEST_LOGIN_ACTION,
        payload: {
            email,
            password,
        },
    };
}

export function createRequestLogoutAction(): object {
    return {
        type: REQUEST_LOGOUT_ACTION,
    };
}
export function requestValidateAccessTokenAction(): any {
    return {
        type: REQUEST_VALIDATE_ACCESS_TOKEN,
    };
}

export function fetchUserProfileAction(): any {
    return {
        type: FETCH_USER_ACTION,
    };
}

export function createRequestLoginGoogleAction(): any {
    return {
        type: REQUEST_LOGIN_SOCIAL_ACTION,
        payload: {
            source: LOGIN_SOCIAL_TYPES.GOOGLE,
        },
    };
}

export function createRequestLoginAppleAction(): any {
    return {
        type: REQUEST_LOGIN_SOCIAL_ACTION,
        payload: {
            source: LOGIN_SOCIAL_TYPES.APPLE,
        },
    };
}
