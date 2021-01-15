import { Mqtt } from './Mqtt';

export class Connection {
    type: string = '';
    ssid: string = '';
    pwd: string = '';
    mqtt_server: string = '';
    mqtt_port: string = '';
    fd_channel: string = '';
    fa_channel: string = '';
    mqtt_usr: string = '';
    mqtt_pwd: string = '';
    device_id: string = '';
    constructor(mqttInfo: Mqtt, wifiName: string, wifiPassword: string, deviceId: string) {
        this.type = 'init';
        this.ssid = wifiName;
        this.pwd = wifiPassword;
        this.mqtt_server = mqttInfo.mqttServer;
        this.mqtt_port = mqttInfo.mqttPort;
        this.fa_channel = mqttInfo.faChannel;
        this.fd_channel = mqttInfo.fdChannel;
        this.mqtt_usr = mqttInfo.mqttUser;
        this.mqtt_pwd = mqttInfo.mqttPassword;
        this.device_id = deviceId;
    }
}

export interface IBluetooth {
    Connection: Connection;
}
