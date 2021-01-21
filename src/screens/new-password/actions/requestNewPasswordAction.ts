import i18next from 'i18next';
import _ from 'lodash';
import { createRequestEndAction, createRequestStartAction } from 'src/redux/request/requestAction';
import { SSOApi } from 'src/services/networking';
export class RequestNewPassword {
    private dispatch: (params: any) => void;
    private onSuccess?: () => void;
    private onError?: (message: string) => void;
    private t: any;

    constructor(dispatch: (param: any) => void, onSuccess: () => void, onError: (message: string) => void) {
        this.dispatch = dispatch;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    changePassword(password: string, newPassword: string) {
        this.dispatch(createRequestStartAction());
        SSOApi.changePassword(password, newPassword)
            .then((response) => {
                if (response && this.onSuccess) this.onSuccess();
            })
            .catch((exception) => {
                const message = _.get(exception, 'error.message', i18next.t('common.error_message'));
                if (this.onError) this.onError(message);
            })
            .finally(() => {
                this.dispatch(createRequestEndAction());
            });
    }
}
export interface IRequestNewPassword {
    changePassword(password: string, newPassword: string): void;
}
