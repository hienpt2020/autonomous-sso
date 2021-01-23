import i18next from 'i18next';
import { hidePopupAction, showPopupAction } from '../app/appAction';
import { HidePopupActionType, ShowPopupActionType, VisibilityPopupActionType } from '../app/appType';
import { REQUEST_END, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS } from './requestType';

export interface RequestStartAction {
    type: typeof REQUEST_START;
}

export interface RequestEndAction {
    type: typeof REQUEST_END;
}

export interface RequestSuccessAction {
    type: typeof REQUEST_SUCCESS;
    payload: any;
}

export interface RequestErrorAction {
    type: typeof REQUEST_ERROR;
    payload: any;
    errorMessage?: string;
}
export function createRequestStartAction(): RequestStartAction {
    return {
        type: REQUEST_START,
    };
}
export function createRequestErrorAction(payload: object): RequestErrorAction {
    return {
        type: REQUEST_ERROR,
        payload,
    };
}
export function createRequestErrorMessageAction(message: string, payload?: object): VisibilityPopupActionType {
    const isShow = message !== '';
    const action: ShowPopupActionType | HidePopupActionType = isShow
        ? showPopupAction(i18next.t('common.error'), message, null, [
              {
                  title: i18next.t('common.ok'),
                  onPress: () => {},
              },
          ])
        : hidePopupAction();
    return action;
}

export function createRequestSuccessAction(payload: object): RequestSuccessAction {
    return {
        type: REQUEST_SUCCESS,
        payload: payload,
    };
}
export function createRequestEndAction(): RequestEndAction {
    return {
        type: REQUEST_END,
    };
}

export type RequestAction = RequestStartAction | RequestEndAction | RequestSuccessAction | RequestErrorAction;
