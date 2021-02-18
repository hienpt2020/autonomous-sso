import {
    HidePopupActionType,
    HIDE_POPUP,
    ShowPopupActionType,
    SHOW_POPUP,
    InitialAppActionType,
    SET_APP_INITIAL_ACTION,
} from './appType';
import { PopupButton } from 'src/components/popup/types';

export const showPopupAction = (
    title: string,
    message: string,
    icon: any,
    buttons: PopupButton[],
): ShowPopupActionType => {
    return {
        type: SHOW_POPUP,
        title,
        message,
        icon,
        buttons,
    };
};

export const hidePopupAction = (): HidePopupActionType => {
    return {
        type: HIDE_POPUP,
    };
};

export const createAppFinishInitialAction = (): InitialAppActionType => {
    return {
        type: SET_APP_INITIAL_ACTION,
    };
};
