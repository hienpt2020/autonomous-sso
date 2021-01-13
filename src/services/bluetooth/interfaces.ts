export interface IStartBleStatus {
  isSuccess: boolean;
  message: string;
}

export interface IDevice {
  id: string;
  isConnectable: boolean;
  localName?: string;
  mtu?: number;
  rssi: number;
}

export class DeviceInfo {
  id: string;
  isConnectable: boolean;
  localName: string;
  mtu: number;
  rssi: number;
  constructor(device: DeviceInfo) {
    this.id = device.id;
    this.isConnectable = device.isConnectable;
    this.localName = device.localName || 'No name';
    this.mtu = device.mtu;
    this.rssi = device.rssi;
  }
}
