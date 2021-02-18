import { IRequestRemoveDeviceAction, REQUEST_REMOVE_DEVICE } from './deviceType';

export function createRequestRemoveDevice(removedDeviceId: string): IRequestRemoveDeviceAction {
    return {
        type: REQUEST_REMOVE_DEVICE,
        removedDeviceId: removedDeviceId,
    };
}
