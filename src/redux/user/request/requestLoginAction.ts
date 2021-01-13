import i18next from 'i18next';
import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import { Preference } from 'src/common/preference';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction
} from 'src/redux/request/requestAction';
import { User } from 'src/models';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { NetworkingConfig } from 'src/services/networking';
import { createSetUserProfileAction } from '../userAction';
import { requestLogin, retrieveUserProfile, retrieveUserWorkspace } from './apiUser';

function* fetchUserProfile() {
    // Get user profile
    const { userProfile, error } = yield call(retrieveUserProfile);
    if (userProfile) {
        //update store
        userProfile.accessToken = yield call(Preference.retrieveAccessToken);
        userProfile.isValidToken = true
        yield put(createSetUserProfileAction(userProfile));
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error'));
        yield put(createRequestErrorMessageAction(message));
    }
}
function* fetchUserWorkspace() {
    // Get user profile
    const { userWorkspace, error } = yield call(retrieveUserWorkspace);
    if (userWorkspace) {
        //update store
        yield put(createActionSetWorkSpace(userWorkspace));
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error'));
        yield put(createRequestErrorMessageAction(message));
    }
}
function* fetchUserData() {
    yield call(fetchUserProfile);
    yield call(fetchUserWorkspace);
}
export function* requestLoginAction(action: any) {
    yield put(createRequestStartAction());
    const { response, error } = yield call(requestLogin, action.payload.email, action.payload.password);
    if (response) {
        const token = response.data.access_token;
        NetworkingConfig.putCommonHeaderWithToken(token);
        yield call(fetchUserData);
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error'));
        yield put(createRequestErrorMessageAction(message));
    }
    yield put(createRequestEndAction());
}
