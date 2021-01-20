import { IController } from '../types';

export class BluetoothImp implements IController {
    up(hubId: string, workingLayoutId: string): Promise<void> {
        console.log('Need to implement up', hubId + workingLayoutId);
        return Promise.resolve();
    }
    down(hubId: string, workingLayoutId: string): Promise<void> {
        console.log('Need to implement down', hubId + workingLayoutId);
        return Promise.resolve();
    }
    stop(hubId: string, workingLayoutId: string): Promise<void> {
        console.log('Need to implement stop', hubId + workingLayoutId);
        return Promise.resolve();
    }
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void> {
        console.log('Need to implement getDeviceInfo', hubId + workingLayoutId);
        return Promise.resolve();
    }
}
