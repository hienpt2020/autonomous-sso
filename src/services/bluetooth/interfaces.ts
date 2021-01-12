export interface IStartBleStatus {
  isSuccess: boolean;
  message: string;
}
export interface IBleManager {
  init(): void;
}

export interface IEventEmitter {
  handleDiscoverPeripheral?: () => void;
  handleStopScan?: () => void;
  handleDisconnectedPeripheral?: () => void;
  handleReadBleNotification?: () => void;
  handleConnectedPeripheral?: () => void;
}
