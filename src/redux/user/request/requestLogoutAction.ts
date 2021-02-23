import { FCM_TOPIC } from './../../../common/constant';
import { clearWorkSpaceAction } from './../../workspace/workspaceAction';
import { call, put, all } from 'redux-saga/effects';
import { Preference } from 'src/common/preference';
import {
    createRequestEndAction,
    createRequestErrorAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { createClearUserProfileAction } from 'src/redux/user/userAction';
import { NetworkingConfig } from 'src/services/networking';
import { requestLogout } from './apiUser';
import messaging from '@react-native-firebase/messaging';
import store from 'src/redux/store';
import { RootState } from 'src/redux/types';
import { Log } from 'src/helpers/logger';

export function* requestLogoutAction(action: any) {
    yield put(createRequestStartAction());
    try {
        const reduxStore: RootState = store.getState();

        messaging()
            .unsubscribeFromTopic(FCM_TOPIC + reduxStore.userReducer.userId)
            .then(() => Log.debug('Unsubscribed fom the topic!'));

        yield all([
            call(requestLogout),
            put(createClearUserProfileAction()),
            call(Preference.saveAccessToken, ''),
            put(clearWorkSpaceAction()),
        ]);

        NetworkingConfig.putCommonHeaderWithToken('');
    } catch (error) {
        console.log(error);
        yield put(createRequestErrorAction(error));
    }

    yield put(createRequestEndAction());
}
