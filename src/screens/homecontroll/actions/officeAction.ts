import { DeviceApi } from 'src/services/networking';
import { createRequestEndAction, createRequestStartAction } from '../../../redux/request';
import Device from '../../../models/Device';
import { Parser } from '../../../helpers/parser';
import { CardData } from '../types';

export class HomeControlActions {
    private dispatch: (params: any) => void;
    constructor(dispatch: (param: any) => void) {
        this.dispatch = dispatch;
    }

    public getWorkspaceDevices = async (): Promise<Device[]> => {
        try {
            let res = await DeviceApi.getDevices();
            res = res.data.map((item: any) => Parser.parseDevice(item));
            let listCheckin = res.filter((item: any) => item.isCheckin);
            return listCheckin;
        } catch (e) {
            return [];
        }
    };

    public getPersonalDevices = async (): Promise<Device[]> => {
        try {
            let res = await DeviceApi.getPersonalDevices();
            res = res.data.map((item: any) => Parser.parseDevice(item));
            return res;
        } catch (e) {
            return [];
        }
    };

    public getAllDevices = async (): Promise<CardData[]> => {
        try {
            let [wsDevices, personalDevices] = await Promise.all([
                this.getWorkspaceDevices(),
                this.getPersonalDevices(),
            ]);
            let data: any[] = [];
            if (wsDevices.length > 0) {
                data.push({ title: 'WorkSpace Device', data: wsDevices });
            }
            if (personalDevices.length > 0) {
                data.push({ title: 'My Device', data: personalDevices });
            }
            return data;
        } catch (e) {
            return [];
        }
    };
}

export interface IHomeControlActions {
    getWorkspaceDevices(): Promise<Device[]>;
    getPersonalDevices(): Promise<Device[]>;
    getAllDevices(): Promise<CardData[]>;
}
