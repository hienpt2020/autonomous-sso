import { PopupButton, PopupState } from 'src/components/popup/types';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const SET_APP_INITIAL_ACTION = 'SET_APP_INITIAL_ACTION';
export const REQUEST_APP_INITIAL = 'REQUEST_APP_INITIAL';

export interface InitialAppActionType {
    type: typeof SET_APP_INITIAL_ACTION;
}

export interface ShowPopupActionType {
    type: typeof SHOW_POPUP;
    title: string;
    icon: any;
    message: string;
    buttons: PopupButton[];
}

export interface HidePopupActionType {
    type: typeof HIDE_POPUP;
}

export type VisibilityPopupActionType = HidePopupActionType | ShowPopupActionType;
export type AppActionType = HidePopupActionType | ShowPopupActionType | InitialAppActionType;

export interface AppState {
    popup: PopupState;
    initial: boolean;
}
