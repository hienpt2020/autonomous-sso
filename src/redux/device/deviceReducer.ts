import {
    CREATE_NEW_PERSONAL_DEVICE_TYPE,
    CREATE_NEW_WS_DEVICE_TYPE,
    ICreateNewPersonDeviceType,
    ICreateNewWSDeviceType,
    ISetupDeviceState,
} from './deviceType';

const initialState: ISetupDeviceState = {
    deviceType: '',
};

export function deviceReducer(
    state = initialState,
    action: ICreateNewPersonDeviceType | ICreateNewWSDeviceType,
): ISetupDeviceState {
    switch (action.type) {
        case CREATE_NEW_PERSONAL_DEVICE_TYPE:
        case CREATE_NEW_WS_DEVICE_TYPE:
            return {
                ...state,
                deviceType: action.deviceType,
            };
        default:
            return state;
    }
}
