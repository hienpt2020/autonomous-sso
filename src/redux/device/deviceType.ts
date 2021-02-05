export interface DeviceState {
    stepHeight: number;
    removedDeviceId: string;
}
export const REQUEST_REMOVE_DEVICE = 'REQUEST_REMOVE_DEVICE';

export interface IRequestRemoveDeviceAction {
    type: typeof REQUEST_REMOVE_DEVICE;
    removedDeviceId: string;
}

export type ActionTypes = IRequestRemoveDeviceAction;
