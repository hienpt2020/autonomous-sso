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
}

interface IBluetooth {
    Connection: Connection;
}
