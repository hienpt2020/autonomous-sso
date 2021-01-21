import i18next from 'i18next';
import _ from 'lodash';
import { Log } from 'src/helpers/logger';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
    createRequestSuccessAction,
} from 'src/redux/request/requestAction';
import { SSOApi } from 'src/services/networking';
export class RequestForgotPassword {
    private dispatch: (params: any) => void;

    constructor(dispatch: (param: any) => void) {
        this.dispatch = dispatch;
    }
    forgotPasswrod(email: string) {
        this.dispatch(createRequestStartAction());
        SSOApi.forgotPassword(email)
            .then((response) => {
                const message = i18next.t('forgot_password.forgot_success');
                this.dispatch(createRequestSuccessAction(response));
                this.dispatch(createRequestErrorMessageAction(message));
                Log.debug(response);
            })
            .catch((exception) => {
                const message = _.get(exception, 'errorMessage', i18next.t('common.error_message'));
                this.dispatch(createRequestErrorMessageAction(message));
            })
            .finally(() => {
                this.dispatch(createRequestEndAction());
            });
    }
}
export interface IRequestForgotPassword {
    forgotPasswrod(email: string): void;
}
