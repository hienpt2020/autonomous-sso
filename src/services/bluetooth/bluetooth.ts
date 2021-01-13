import { DeviceEventEmitter } from 'react-native';
import { DeviceInfo, IBleManager } from './interfaces';
import { BleManager } from 'react-native-ble-plx';

export const EVENT_EMITTER_BLE = {
  DISCOVERED_DEVICE: 'DISCOVERED_DEVICE',
  DISCONNECT_DEVICE: 'DISCONNECTED_DEVICE',
  CONNECTED_DEVICE: 'CONNECTED_DEVICE',
  STOP_SCAN: 'STOP_SCAN',
};
class BleManagerImp {
  manager: any = null;
  devices: any[] = [];

  constructor() {
    if (!this.manager) {
      this.manager = new BleManager();
      this.devices = [];
    }
  }

  startScanDevice(): void {
    this.manager.startDeviceScan(null, null, (error: any, device: any) => {
      if (error) {
        console.log('@error:', error);
        return;
      }
      let _device: DeviceInfo = new DeviceInfo(device);
      this.handleDiscoverDevice(_device);
    });
  }

  stopScanDevice(): void {
    this.manager.stopDeviceScan();
  }

  connectToDevice(deviceId: string): Promise<any> {
    return this.manager.connectToDevice(deviceId);
  }

  handleDiscoverDevice = (device: DeviceInfo): void => {
    let devices: any = [...this.devices];
    let isExisted = devices.some((item: any) => item.id === device.id);
    if (!isExisted) {
      devices.push(device);
      DeviceEventEmitter.emit(EVENT_EMITTER_BLE.DISCOVERED_DEVICE, devices);
      this.devices = [...devices];
    }
  };

  cancelDeviceConnection(deviceId: string): Promise<any> {
    return this.manager.cancelDeviceConnection(deviceId);
  }

  onDeviceDisconnected(deviceId: string): void {
    this.manager.onDeviceDisconnected( deviceId, listener: function (error: BleError?, device: Device))
  }
}

export default new BleManagerImp();
