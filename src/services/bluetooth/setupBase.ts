import { Mqtt } from '../../models/Mqtt';
import { IInfoWifi } from './types';

export class SetupBase {
    protected _mqttInfo = new Mqtt();
    protected _connectedPeripheralId: string = '';
    protected _servicesInfo: any;
    protected _infoWifi: IInfoWifi = { name: '', password: '' };
    protected _deviceType: string = '';

    set wifi(infoWifi: IInfoWifi) {
        this._infoWifi = { ...infoWifi };
    }

    get wifi() {
        return this._infoWifi;
    }

    set deviceType(type: string) {
        this._deviceType = type;
    }

    get deviceType() {
        return this._deviceType;
    }
}
