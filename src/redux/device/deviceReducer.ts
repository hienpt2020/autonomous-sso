import { ActionTypes, DeviceState } from './deviceType';

const initialState: DeviceState = {
    stepHeight: 0,
    removedDeviceId: '',
};

export function deviceReducer(state = initialState, action: ActionTypes): DeviceState {
    switch (action.type) {
        default:
            return state;
    }
}
