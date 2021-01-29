export interface IResponseMqtt {
    mqtt_port: string;
    mqtt_server: string;
    mqtt_user: string;
    mqtt_password: string;
    fd_channel: string;
    fa_channel: string;
}

export class Mqtt {
    mqttServer: string = '';
    mqttPort: string = '';
    mqttUser: string = '';
    mqttPassword: string = '';
    fdChannel: string = '';
    faChannel: string = '';
    constructor(res?: IResponseMqtt) {
        if (res) {
            this.mqttPort = res.mqtt_port;
            this.mqttServer = res.mqtt_server;
            this.mqttUser = res.mqtt_user;
            this.mqttPassword = res.mqtt_password;
            this.fdChannel = res.fd_channel;
            this.faChannel = res.fa_channel;
        }
    }
}
