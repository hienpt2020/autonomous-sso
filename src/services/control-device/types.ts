export const API_CONTROLLER = 'API';
export const BLE_CONTROLLER = 'BLE';

export interface IController {
    up(hubId: string, workingLayoutId: string): Promise<any>;
    down(hubId: string, workingLayoutId: string): Promise<any>;
    stop(hubId: string, workingLayoutId: string): Promise<any>;
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<any>;
    stand(hubId: string, workingLayoutId: string): Promise<any>;
    sit(hubId: string, workingLayoutId: string): Promise<any>;
}
