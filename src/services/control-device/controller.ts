import { API_CONTROLLER, BLE_CONTROLLER } from './types';
import { ControllerFactory } from './factory';
import { DeviceApi } from '../networking';
import i18next from 'i18next';
import store from 'src/redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import { Log } from 'src/helpers/logger';
import { createRequestRemoveDevice } from 'src/redux/device/deviceAction';

export class Controller {
    private static isNetworking: boolean = true;
    public static async up(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.up(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }
    public static async down(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.down(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }
    public static async stop(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.stop(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }
    public static async getDeviceInfo(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.getDeviceInfo(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }

    public static async stand(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.stand(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }

    public static async sit(hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.sit(hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }

    public static async gotoHeight(height: number, hubId: string, workingLayoutId: string): Promise<void> {
        try {
            const controller = ControllerFactory.create(this.isNetworking ? API_CONTROLLER : BLE_CONTROLLER);
            await controller.gotoHeight(height, hubId, workingLayoutId);
        } catch (e) {
            Log.error(e);
        }
    }

    public static async removeDevice(hubId: string): Promise<void> {
        try {
            store.dispatch(createRequestStartAction());
            let res = await DeviceApi.removeDevice(hubId);
            store.dispatch(createRequestRemoveDevice(hubId));
        } catch (e) {
            store.dispatch(createRequestErrorMessageAction(i18next.t('common.error_message')));
            Log.error(e);
        } finally {
            store.dispatch(createRequestEndAction());
        }
    }
}
