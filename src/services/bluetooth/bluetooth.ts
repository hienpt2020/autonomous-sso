import { DeviceApi } from 'src/services/networking';
import BleManager from 'react-native-ble-manager';
import { PermissionsAndroid, Platform } from 'react-native';
import { Mqtt } from 'src/models/Mqtt';
import store from 'src/redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from '../../redux/request';
import { Parser } from 'src/helpers/parser';
import { Log } from 'src/helpers/logger';
import { SetupBase } from './setupBase';
import { Helper } from './helper';
const IS_IOS = Platform.OS === 'ios';
const PORT_WRITE = IS_IOS ? 1 : 5;
const PORT_NOTIFY = IS_IOS ? 0 : 4;

export class ConfigStep1Actions extends SetupBase {
    private write = async (data: any): Promise<void> => {
        await BleManager.write(
            this._connectedPeripheralId,
            this._servicesInfo.characteristics[PORT_WRITE].service,
            this._servicesInfo.characteristics[PORT_WRITE].characteristic,
            data,
            500,
        );
    };

    public getMqttInfo = async (): Promise<void> => {
        try {
            store.dispatch(createRequestStartAction());
            const res: any = await DeviceApi.getMqttInfo();
            this._mqttInfo = new Mqtt(res.data);
            console.log('@getMqttInfo:', this._mqttInfo);
            store.dispatch(createRequestEndAction());
        } catch (error) {
            store.dispatch(createRequestEndAction());
        }
    };

    public connectToPeripheral = async (peripheralId: string, callback?: () => void): Promise<void> => {
        try {
            store.dispatch(createRequestStartAction());
            await BleManager.connect(peripheralId);
            this._connectedPeripheralId = peripheralId;
            await this.handleAfterConnectedSuccessfully(peripheralId);
            callback && callback();
            store.dispatch(createRequestEndAction());
        } catch (e) {
            this._connectedPeripheralId = '';
            console.log('Error connecting bluetooth', e);
            store.dispatch(createRequestEndAction());
        }
    };

    private handleAfterConnectedSuccessfully = async (peripheralId: string) => {
        try {
            this._servicesInfo = await BleManager.retrieveServices(peripheralId);
            if (!IS_IOS) {
                await BleManager.requestMTU(peripheralId, 512);
            }
            await BleManager.startNotification(
                peripheralId,
                this._servicesInfo.characteristics[PORT_NOTIFY].service,
                this._servicesInfo.characteristics[PORT_NOTIFY].characteristic,
            );
            await this.stopScan();
        } catch (e) {
            console.log('Error - handleAfterConnectedSuccessfully:', e);
        }
    };

    public connectDeviceToServer = async (layoutId: number, deviceId: string): Promise<void> => {
        store.dispatch(createRequestStartAction());
        let param: object;
        try {
            param = Helper.formatParamInitConnection(
                this._mqttInfo,
                this.wifi.name,
                this.wifi.password,
                layoutId,
                deviceId,
            );
            let data = Parser.parseStringToBytes(JSON.stringify(param));
            await this.write(data);
        } catch (e) {
            store.dispatch(createRequestEndAction());
            store.dispatch(createRequestErrorMessageAction(e));
            if (__DEV__) {
                console.log('@Error booking device:', e);
            }
        }
    };

    public checkPermission = (): void => {
        if (!IS_IOS && Platform.Version >= 23) {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                if (result) {
                    console.log('Permission is OK');
                } else {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                        if (result) {
                            console.log('User accept');
                        } else {
                            console.log('User refuse');
                        }
                    });
                }
            });
        }
    };

    stopScan = async (): Promise<void> => {
        try {
            await BleManager.stopScan();
        } catch (e) {}
    };

    public createPersonalDevice = async (
        hubId: string,
        faChannel: string = '',
        fdChannel: string = '',
    ): Promise<void> => {
        try {
            let res = await DeviceApi.createPersonalDevice(hubId, faChannel, fdChannel);
            Log.debug('@createPersonalDevice:', res);
        } catch (e) {
            Log.debug('@createPersonalDevice error:', e);
        }
    };

    public generatePersonalDeviceCode = async (): Promise<string> => {
        try {
            let res = await DeviceApi.generatePersonalDeviceCode();
            return Promise.resolve(res.data);
        } catch (e) {
            Log.debug('@generatePersonalDeviceCode error:', e);
            return Promise.resolve('');
        }
    };

    public getDeviceIdFromHardware = (): void => {
        let data = Parser.parseStringToBytes(JSON.stringify({ type: 'get_device_id' }));
        this.write(data);
    };
}

export interface IConfigStep1Actions {
    getMqttInfo(): Promise<void>;
    connectToPeripheral(peripheralId: string, callback?: void): Promise<void>;
    checkPermission(): void;
    stopScan(): Promise<void>;
    connectDeviceToServer(layoutId: number, deviceId: string): Promise<void>;
    generatePersonalDeviceCode(): Promise<void>;
    createPersonalDevice(hubId: string, faChannel: string, fdChannel: string): Promise<void>;
    getDeviceIdFromHardware(): void;
}
export const Bluetooth = new ConfigStep1Actions();
