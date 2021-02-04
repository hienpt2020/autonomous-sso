import {
    AppState,
    HidePopupActionType,
    HIDE_POPUP,
    ShowPopupActionType,
    SHOW_POPUP,
    SET_NOTIFICATION_CHECKIN,
    SetNotificationCheckinActionType,
} from './appType';

const initialState: AppState = {
    popup: {
        visible: false,
        message: '',
        title: '',
        icon: undefined,
        buttons: [],
    },
    notification: {
        hasCheckinNotification: false,
    },
};

export function appReducer(
    state = initialState,
    action: ShowPopupActionType | HidePopupActionType | SetNotificationCheckinActionType,
): AppState {
    switch (action.type) {
        case SHOW_POPUP:
            return {
                ...state,
                popup: {
                    ...state.popup,
                    visible: true,
                    title: action.title,
                    message: action.message,
                    icon: action.icon,
                    buttons: action.buttons,
                },
            };

        case HIDE_POPUP:
            return {
                ...state,
                popup: initialState.popup,
            };

        case SET_NOTIFICATION_CHECKIN:
            return {
                ...state,
                notification: {
                    ...state.notification,
                    hasCheckinNotification: action.hasCheckinNotification,
                },
            };

        default:
            return state;
    }
}
