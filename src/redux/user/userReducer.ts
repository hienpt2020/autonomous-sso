import { UserState, ACTION_SET_USER_PROFILE, ACTION_CLEAR_USER_PROFILE, USER_INVALID_TOKEN } from './userType';
import { UserAction } from './userAction';

const initialState: UserState = new UserState();

export function userReducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
        case ACTION_SET_USER_PROFILE:
            return {
                ...state,
                isValidToken: true,
                ...action.payload,
            };

        case ACTION_CLEAR_USER_PROFILE:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}
