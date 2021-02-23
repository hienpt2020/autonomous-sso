import { PopupButton, PopupState } from 'src/components/popup/types';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const SET_APP_INITIAL_ACTION = 'SET_APP_INITIAL_ACTION';
export const REQUEST_APP_INITIAL = 'REQUEST_APP_INITIAL';

export const SET_NOTIFICATION_CHECKIN = 'SET_NOTIFICATION_CHECKIN';

const NEGATIVE = 'negative';
const POSITIVE = 'positive';
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

export interface SetNotificationCheckinActionType {
    type: typeof SET_NOTIFICATION_CHECKIN;
    hasCheckinNotification: boolean;
}

export type VisibilityPopupActionType = HidePopupActionType | ShowPopupActionType;
export type AppActionType = HidePopupActionType | ShowPopupActionType | InitialAppActionType;

export interface NotificationState {
    hasCheckinNotification: boolean;
}

export interface AppState {
    popup: PopupState;
    notification: NotificationState;
    initial: boolean;
}
