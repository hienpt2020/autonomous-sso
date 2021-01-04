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
}

export type RequestAction = RequestStartAction | RequestEndAction | RequestSuccessAction | RequestErrorAction;
