import { API_CONTROLLER, BLE_CONTROLLER } from '../types';
import { ApiImp } from './api';
import { BluetoothImp } from './bluetooth';

export class ControllerFactory {
    public static create(name: string) {
        switch (name) {
            case API_CONTROLLER:
                return new ApiImp();
            case BLE_CONTROLLER:
                return new BluetoothImp();
            default:
                return new ApiImp();
        }
    }
}
