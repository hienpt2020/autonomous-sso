import { API_CONTROLLER, BLE_CONTROLLER } from './types';
import { ControllerFactory } from './factory';

export class Controller {
    isNetworking: boolean = true;
    up(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            return controller.up(hubId, workingLayoutId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    down(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            return controller.down(hubId, workingLayoutId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    stop(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            return controller.stop(hubId, workingLayoutId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            return controller.getDeviceInfo(hubId, workingLayoutId);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
