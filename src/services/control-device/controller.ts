import { API_CONTROLLER, BLE_CONTROLLER } from './types';
import { ControllerFactory } from './factory';

export class Controller {
    private static isNetworking: boolean = true;
    public static async up(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.up(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async down(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.down(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async stop(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.stop(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    public static async getDeviceInfo(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.getDeviceInfo(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public static async stand(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.stand(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public static async sit(hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.sit(hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public static async gotoHeight(height: number, hubId: string, workingLayoutId: string): Promise<any> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            let res = await controller.gotoHeight(height, hubId, workingLayoutId);
            return Promise.resolve(res);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
