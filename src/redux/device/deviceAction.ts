import {
    CREATE_NEW_PERSONAL_DEVICE_TYPE,
    CREATE_NEW_WS_DEVICE_TYPE,
    ICreateNewPersonDeviceType,
    ICreateNewWSDeviceType,
} from './deviceType';
import { DEVICE_TYPES } from 'src/common/constant';

export function createNewPersonDeviceType(): ICreateNewPersonDeviceType {
    return {
        type: CREATE_NEW_PERSONAL_DEVICE_TYPE,
        deviceType: DEVICE_TYPES.PERSONAL,
    };
}

export function createNewWSDeviceType(): ICreateNewWSDeviceType {
    return {
        type: CREATE_NEW_WS_DEVICE_TYPE,
        deviceType: DEVICE_TYPES.WORKSPACE,
    };
}
