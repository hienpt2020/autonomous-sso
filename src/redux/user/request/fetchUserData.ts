import i18next from 'i18next';
import _ from 'lodash';
import { all, call, put } from 'redux-saga/effects';
import { Preference } from 'src/common/preference';
import { createRequestErrorMessageAction } from 'src/redux/request/requestAction';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { createSetUserProfileAction } from '../userAction';
import { retrieveUserProfile, retrieveUserWorkspace } from './apiUser';

function* fetchUserProfile() {
    // Get user profile
    const { userProfile, error } = yield call(retrieveUserProfile);
    if (userProfile) {
        //update store
        userProfile.accessToken = yield call(Preference.retrieveAccessToken);
        userProfile.isValidToken = true;
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
        // TODO handle current user are'nt belong to any WS
        const message = _.get(error, 'errorMessage', i18next.t('common.error'));
        //yield put(createRequestErrorMessageAction(message));
    }
}
export function* fetchUserData() {
    yield all([call(fetchUserProfile), call(fetchUserWorkspace)]);
}
