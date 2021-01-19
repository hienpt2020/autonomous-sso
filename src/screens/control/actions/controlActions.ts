import { DeviceApi } from 'src/services/networking';

export class ControlActions {
    private dispatch: (params: any) => void;
    constructor(dispatch: (param: any) => void) {
        this.dispatch = dispatch;
    }

    public up = async (hubId: string, workingLayoutId: string): Promise<void> => {
        try {
            let x = await DeviceApi.controlUp(hubId, workingLayoutId);
            console.log('@mmsmadsmsdmsdmsd:', x);
        } catch (e) {
            console.log('@up error:', e);
        }
    };

    public down = async (hubId: string, workingLayoutId: string): Promise<void> => {
        try {
            await DeviceApi.controlDown(hubId, workingLayoutId);
        } catch (e) {}
    };

    public stop = async (hubId: string, workingLayoutId: string): Promise<void> => {
        try {
            let x = await DeviceApi.controlStop(hubId, workingLayoutId);
        } catch (e) {}
    };

    public getDeviceInfo = async (hubId: string, workingLayoutId: string): Promise<void> => {
        try {
            let x = await DeviceApi.getDeviceInfo(hubId, workingLayoutId);
        } catch (e) {}
    };
}

export interface IControlActions {
    up(hubId: string, workingLayoutId: string): Promise<void>;
    down(hubId: string, workingLayoutId: string): Promise<void>;
    stop(hubId: string, workingLayoutId: string): Promise<void>;
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void>;
}
