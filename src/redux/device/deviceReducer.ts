import { ActionType, DeviceState } from './deviceType';

const initialState: DeviceState = {};

export function deviceReducer(state = initialState, action: ActionType): DeviceState {
    switch (action.type) {
        default:
            return state;
    }
}
