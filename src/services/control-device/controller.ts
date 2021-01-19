import { API_CONTROLLER, BLE_CONTROLLER } from './types';
import { ControllerFactory } from './factory';

export class Controller {
    private static isNetworking: boolean = true;
    public static async up(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            console.log('@up:');
            let res = await controller.up(hubId, workingLayoutId);
            console.log('@response up:', res);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async down(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            console.log('@down:');
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            console.log('@res down:');
            let res = await controller.down(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async stop(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            console.log('@stop:');
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.stop(hubId, workingLayoutId);
            console.log('@res stop:');
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.getDeviceInfo(hubId, workingLayoutId);
            console.log('@get device info', res);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
