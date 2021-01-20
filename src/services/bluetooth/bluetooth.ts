import { DeviceApi } from 'src/services/networking';
import BleManager from 'react-native-ble-manager';
import { PermissionsAndroid, Platform } from 'react-native';
import { Mqtt } from '../../models/Mqtt';
import store from '../../redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from '../../redux/request';
import { RouteName } from '../../routers/routeName';
import { navigate } from '../../routers/rootNavigation';
import { Parser } from '../../helpers/parser';
const IS_IOS = Platform.OS === 'ios';
const PORT_WRITE = IS_IOS ? 1 : 5;
const PORT_NOTIFY = IS_IOS ? 0 : 4;

export class ConfigStep1Actions {
    private mqttInfo: any | null;
    private connectedPeripheralId: string = '';
    private servicesInfo: any;

    public getMqttInfo = async (): Promise<void> => {
        try {
            store.dispatch(createRequestStartAction());
            const res: any = await DeviceApi.getMqttInfo();
            this.mqttInfo = new Mqtt(res.data);
            console.log('@masdmsdmsd:', this.mqttInfo);
            store.dispatch(createRequestEndAction());
        } catch (error) {
            store.dispatch(createRequestEndAction());
        }
    };

    public connectToPeripheral = async (peripheralId: string): Promise<void> => {
        try {
            await BleManager.connect(peripheralId);
            this.connectedPeripheralId = peripheralId;
            await this.handleAfterConnectedSuccessfully(peripheralId);
        } catch (e) {
            this.connectedPeripheralId = '';
            console.log('Error connecting bluetooth', e);
        }
    };

    private handleAfterConnectedSuccessfully = async (peripheralId: string) => {
        try {
            this.servicesInfo = await BleManager.retrieveServices(peripheralId);
            if (!IS_IOS) {
                await BleManager.requestMTU(peripheralId, 512);
            }
            await BleManager.startNotification(
                peripheralId,
                this.servicesInfo.characteristics[PORT_NOTIFY].service,
                this.servicesInfo.characteristics[PORT_NOTIFY].characteristic,
            );
            navigate(RouteName.CONFIGURATION_STEP2, { bookingDevice: this.bookingDevice });
            await this.stopScan();
        } catch (e) {
            console.log('Error - handleAfterConnectedSuccessfully:', e);
        }
    };

    public bookingDevice = async (
        wifiName: string,
        wifiPassword: string,
        layoutId: number,
        deviceId: string,
    ): Promise<void> => {
        store.dispatch(createRequestStartAction());
        try {
            let data = Parser.parseStringToBytes(
                JSON.stringify({
                    type: 'init',
                    ssid: wifiName, // wifiName
                    pwd: wifiPassword, // '@11235813',
                    device_id: deviceId,
                    mqtt_server: this.mqttInfo.mqttServer, // '34.71.0.216',
                    mqtt_port: this.mqttInfo.mqttPort,
                    fd_channel: this.mqttInfo.fdChannel + `/${layoutId}/${deviceId}`, // `SmartDesk/f_d/${layoutId}/${deviceId}`
                    fa_channel: this.mqttInfo.faChannel + `/${layoutId}/${deviceId}`, // `SmartDesk/f_a/${layoutId}/${deviceId}`
                    mqtt_usr: this.mqttInfo.mqttUser, // 'autonomous'
                    mqtt_pwd: this.mqttInfo.mqttPassword, // '123'
                }),
            );
            console.log('@asadsmasdmadsassdasd:', data);
            await BleManager.write(
                this.connectedPeripheralId,
                this.servicesInfo.characteristics[PORT_WRITE].service,
                this.servicesInfo.characteristics[PORT_WRITE].characteristic,
                data,
                500,
            );
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
}

export interface IConfigStep1Actions {
    getMqttInfo(): Promise<void>;
    connectToPeripheral(peripheralId: string): Promise<void>;
    checkPermission(): void;
    stopScan(): Promise<void>;
    bookingDevice(wifiName: string, wifiPassword: string, layoutId: number, deviceId: string): Promise<void>;
}
export const Bluetooth = new ConfigStep1Actions();
