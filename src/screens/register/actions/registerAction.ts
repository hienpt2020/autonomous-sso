import i18next from 'i18next';
import { createRequestErrorMessageAction } from 'src/redux/request';
import store from 'src/redux/store';
import { SSOApi } from 'src/services/networking';
import _ from 'lodash';
import { Log } from 'src/helpers/logger';

export const activeAccountAction = async (token: string) => {
    try {
        const response = await SSOApi.activeAccount(token);
        return response.data.access_token;
    } catch (error) {
        const message = _.get(error.error, 'message', i18next.t('common.error_message'));
        store.dispatch(createRequestErrorMessageAction(message));
        return undefined;
    }
};
