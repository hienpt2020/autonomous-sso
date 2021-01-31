import { AppState, HIDE_POPUP, SET_APP_INITIAL_ACTION, AppActionType, SHOW_POPUP } from './appType';

const initialState: AppState = {
    popup: {
        visible: false,
        message: '',
        title: '',
        icon: undefined,
        buttons: [],
    },
    initial: false,
};

export function appReducer(state = initialState, action: AppActionType): AppState {
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
        case SET_APP_INITIAL_ACTION:
            return {
                ...state,
                initial: true,
            };

        default:
            return state;
    }
}
