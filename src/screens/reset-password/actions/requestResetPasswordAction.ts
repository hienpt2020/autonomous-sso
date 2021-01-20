import i18next from 'i18next';
import _ from 'lodash';
import { Preference } from 'src/common/preference';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { requestValidateAccessTokenAction } from 'src/redux/user';
import { SSOApi } from 'src/services/networking';
export class RequestResetPassword {
    private dispatch: (params: any) => void;

    constructor(dispatch: (param: any) => void) {
        this.dispatch = dispatch;
    }
    resetPassword(token: string, password: string) {
        this.dispatch(createRequestStartAction());
        SSOApi.resetPassword(token, password)
            .then((response) => {
                const token = _.get(response, 'data.access_token');
                return Preference.saveAccessToken(token);
            })
            .then(() => {
                return this.dispatch(requestValidateAccessTokenAction());
            })
            .catch((exception) => {
                const message = _.get(exception, 'errorMessrage', i18next.t('common.error'));
                this.dispatch(createRequestErrorMessageAction(message));
            })
            .finally(() => {
                this.dispatch(createRequestEndAction());
            });
    }
}
export interface IRequestResetPassword {
    resetPassword(token: string, password: string): void;
}
