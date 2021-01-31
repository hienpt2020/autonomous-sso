import { PopupButton, PopupState } from 'src/components/popup/types';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

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

export interface AppState {
    popup: PopupState;
}
