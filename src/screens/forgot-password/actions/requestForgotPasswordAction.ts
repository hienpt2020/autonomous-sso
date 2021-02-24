import i18next from 'i18next';
import _ from 'lodash';
import { showPopup } from 'src/components';
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
    forgotPassword(email: string) {
        this.dispatch(createRequestStartAction());
        SSOApi.forgotPassword(email)
            .then((response) => {
                const message = i18next.t('forgot_password.forgot_success');
                const title = i18next.t('forgot_password.title');
                this.dispatch(createRequestSuccessAction(response));
                showPopup(title, message, null, [
                    {
                        title: i18next.t('common.ok'),
                    },
                ]);
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
    forgotPassword(email: string): void;
}
