import { REQUEST_START, REQUEST_ERROR, REQUEST_SUCCESS, REQUEST_END } from './requestType';

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
export function createRequestErrorMessageAction(message: string, payload?: object): RequestErrorAction {
    return {
        type: REQUEST_ERROR,
        payload,
        errorMessage: message,
    };
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
