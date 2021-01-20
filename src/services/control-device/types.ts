export const API_CONTROLLER = 'API';
export const BLE_CONTROLLER = 'BLE';

export interface IController {
    up(hubId: string, workingLayoutId: string): Promise<void>;
    down(hubId: string, workingLayoutId: string): Promise<void>;
    stop(hubId: string, workingLayoutId: string): Promise<void>;
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void>;
}
