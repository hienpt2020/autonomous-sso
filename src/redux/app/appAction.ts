import {
    HidePopupActionType,
    HIDE_POPUP,
    ShowPopupActionType,
    SHOW_POPUP,
    PopupButton,
    SetNotificationCheckinActionType,
    SET_NOTIFICATION_CHECKIN,
} from './appType';

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

export const setNotificationCheckinAction = (hasCheckinNotification: boolean): SetNotificationCheckinActionType => {
    return {
        type: SET_NOTIFICATION_CHECKIN,
        hasCheckinNotification,
    };
};
