import { DeviceApi } from 'src/services/networking';
import { createRequestEndAction, createRequestStartAction } from '../../../redux/request';
import Device from '../../../models/Device';
import { Parser } from '../../../helpers/parser';

export class HomeControlActions {
    private dispatch: (params: any) => void;
    constructor(dispatch: (param: any) => void) {
        this.dispatch = dispatch;
    }

    public getDevices = async (): Promise<Device[]> => {
        try {
            let res = await DeviceApi.getDevices();
            return res.data.map((item: any) => Parser.parseDevice(item));
        } catch (e) {
            return [];
        }
    };
}

export interface IHomeControlActions {
    getDevices(): Promise<Device[]>;
}
