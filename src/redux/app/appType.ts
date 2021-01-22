export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

const NEGATIVE = 'negative';
const POSITIVE = 'positive';

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

export interface PopupButton {
    title: string;
    style?: typeof NEGATIVE | typeof POSITIVE;
    onPress: () => void;
}

export interface PopupState {
    visible: boolean;
    title: string;
    message: string;
    icon: any;
    buttons: PopupButton[];
}

export interface AppState {
    popup: PopupState;
}
