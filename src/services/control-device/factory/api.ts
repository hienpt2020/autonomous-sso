import { DeviceApi } from '../../networking';
import { IController } from '../types';

export class ApiImp implements IController {
    up(hubId: string, workingLayoutId: string): Promise<void> {
        return DeviceApi.controlUp(hubId, workingLayoutId);
    }
    down(hubId: string, workingLayoutId: string): Promise<void> {
        return DeviceApi.controlDown(hubId, workingLayoutId);
    }
    stop(hubId: string, workingLayoutId: string): Promise<void> {
        return DeviceApi.controlStop(hubId, workingLayoutId);
    }
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void> {
        return DeviceApi.getDeviceInfo(hubId, workingLayoutId);
    }
}
