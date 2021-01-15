// import { DeviceEventEmitter } from 'react-native';
// import { DeviceInfo, IBleManager } from './interfaces';
// import { BleManager } from 'react-native-ble-plx';
//
// export const EVENT_EMITTER_BLE = {
//     DISCOVERED_DEVICE: 'DISCOVERED_DEVICE',
//     DISCONNECT_DEVICE: 'DISCONNECTED_DEVICE',
//     CONNECTED_DEVICE: 'CONNECTED_DEVICE',
//     STOP_SCAN: 'STOP_SCAN',
// };
// class BleManagerImp {
//     manager: any = null;
//     devices: any[] = [];
//     subscribeState: any | null;
//     constructor() {
//         if (!this.manager) {
//             this.manager = new BleManager();
//             this.devices = [];
//         }
//     }
//
//     startScanDevice(): void {
//         this.manager.startDeviceScan(null, null, (error: any, device: any) => {
//             console.log('@nsdnasnndas:', device);
//             if (error) {
//                 console.log('@error:', error);
//                 return;
//             }
//             let _device: DeviceInfo = new DeviceInfo(device);
//             this.handleDiscoverDevice(device);
//         });
//     }
//
//     stopScanDevice(): void {
//         this.manager.stopDeviceScan();
//     }
//
//     connectToDevice(deviceId: string): Promise<any> {
//         return this.manager.connectToDevice(deviceId);
//     }
//
//     handleDiscoverDevice = (device: DeviceInfo): void => {
//         let devices: any = [...this.devices];
//         let isExisted = devices.some((item: any) => item.id === device.id);
//         if (!isExisted && device.localName) {
//             devices.push(device);
//             DeviceEventEmitter.emit(EVENT_EMITTER_BLE.DISCOVERED_DEVICE, devices);
//             this.devices = [...devices];
//             console.log('@snnsds:', this.devices);
//         }
//     };
//
//     cancelDeviceConnection(deviceId: string): Promise<any> {
//         return this.manager.cancelDeviceConnection(deviceId);
//     }
//
//     onStateChange = (): void => {
//         this.subscribeState = this.manager.onStateChange((state: any) => {
//             // SUBSCRIBE
//             console.log('@Bluetooth on state change:', state);
//             if (state === 'PoweredOn') {
//                 this.startScanDevice();
//             }
//         });
//         // this.subscribeState.remove();
//     };
//
//     getConnectedDevices(): Promise<any> {
//         return this.manager.connectedDevices();
//     }
//
//     writeCharacteristicWithResponseForDevice(
//         deviceIdentifier: string,
//         serviceUUID: string,
//         characteristicUUID: string,
//         base64Value: string,
//         transactionId?: string,
//     ): void {
//         let data = {
//             type: 'init',
//             ssid: 'Autonomous',
//             pwd: '@11235813',
//             mqtt_server: '34.71.0.216',
//             mqtt_port: '1883',
//             fd_channel: 'SmartDesk/f_d/1/fKSY2GVwe',
//             fa_channel: 'SmartDesk/f_a/1/fKSY2GVwe',
//             mqtt_usr: 'autonomous',
//             mqtt_pwd: '123',
//             device_id: 'fKSY2GVwe',
//         };
//     }
//
//     async readCharacteristicForDevice() {
//         let character = await this.manager.readCharacteristicForDevice();
//         console.log('@readCharacteristicForDevice', character);
//     }
//
//     servicesForDevice(deviceId: string): Promise<any> {
//         return this.manager.servicesForDevice(deviceId);
//     }
// }
//
// export default new BleManagerImp();
