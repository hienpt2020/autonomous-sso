import { DeviceApi } from '../../networking';
import { IController } from '../types';

export class ApiImp implements IController {
    up(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.controlUp(hubId, workingLayoutId);
    }
    down(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.controlDown(hubId, workingLayoutId);
    }
    stop(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.controlStop(hubId, workingLayoutId);
    }
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.getDeviceInfo(hubId, workingLayoutId);
    }
    stand(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.controlStand(hubId, workingLayoutId);
    }
    sit(hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.controlSit(hubId, workingLayoutId);
    }
    gotoHeight(height: number, hubId: string, workingLayoutId: string): Promise<any> {
        return DeviceApi.gotoHeight(height, hubId, workingLayoutId);
    }
}
