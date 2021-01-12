import BleManagerRN from 'react-native-ble-manager';
import { NativeEventEmitter, NativeModules } from 'react-native';
import { IBleManager, IEventEmitter, IStartBleStatus } from './interfaces';

let bleInstance: any = null;

class BleManager implements IBleManager {
  bleManagerModule: any;
  bleManagerEmitter: any;
  eventEmitters: any[] = [];
  constructor() {
    console.log('@BleManager');
    if (!bleInstance) {
      bleInstance = BleManagerRN;
      this.init();
    }
  }

  test(): void {
    console.log('@BleManager');
  }

  init(): void {
    try {
      this.bleManagerModule = NativeModules.BleManager;
      this.bleManagerEmitter = new NativeEventEmitter(this.bleManagerModule);
    } catch (e) {
      console.log('@Init ble error:', e);
    }
  }

  initEventEmitter(events: IEventEmitter): void {
    if (typeof events.handleDiscoverPeripheral === 'function') {
      this.bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', events.handleDiscoverPeripheral);
    }
    if (typeof events.handleStopScan === 'function') {
      this.bleManagerEmitter.addListener('BleManagerStopScan', events.handleStopScan);
    }

    if (typeof events.handleDisconnectedPeripheral === 'function') {
      this.bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', events.handleDisconnectedPeripheral);
    }
    if (typeof events.handleReadBleNotification === 'function') {
      this.bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', events.handleReadBleNotification);
    }
    if (typeof events.handleConnectedPeripheral === 'function') {
      this.bleManagerEmitter.addListener('BleManagerConnectPeripheral', events.handleConnectedPeripheral);
    }
  }

  removeEventEmitter(): void {}

  async start(): Promise<IStartBleStatus> {
    try {
      await bleInstance.start({ showAlert: false });
      return Promise.resolve({ isSuccess: true, message: '' });
    } catch (e) {
      return Promise.resolve({ isSuccess: false, message: e });
    }
  }
}

export default new BleManager();
