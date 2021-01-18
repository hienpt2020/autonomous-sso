import { AppState, HidePopupActionType, HIDE_POPUP, ShowPopupActionType, SHOW_POPUP } from './appType';

const initialState: AppState = {
    popup: {
        visible: false,
        message: '',
        title: '',
        icon: undefined,
        buttons: [],
    },
};

export function appReducer(state = initialState, action: ShowPopupActionType | HidePopupActionType): AppState {
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

        default:
            return state;
    }
}
