import { SSOApi } from 'src/services/networking';
import store from 'src/redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import { fetchUserProfileAction } from 'src/redux/user/userSaga';
import { Log } from 'src/helpers/logger';
import { goBack } from 'src/routers/rootNavigation';
import i18next from 'i18next';

export async function updateProfile(fullName: string, phone: string): Promise<void> {
    try {
        store.dispatch(createRequestStartAction());
        const { data } = await SSOApi.updateUserProfile(fullName, phone);

        if (data.status > 0) {
            store.dispatch(fetchUserProfileAction());
            goBack();
        } else {
            store.dispatch(createRequestErrorMessageAction(data.message));
        }
    } catch (e) {
        store.dispatch(createRequestErrorMessageAction(i18next.t('common.error_message')));
        Log.error('[updateProfile]:' + e);
    } finally {
        store.dispatch(createRequestEndAction());
    }
}

export const updateProfileActions = { updateProfile };
