export class Helper {
    public static formatParamInitConnection(
        mqttInfo: any,
        wifiName: string,
        wifiPassword: string,
        layoutId: number,
        deviceId: string,
    ) {
        return {
            type: 'init',
            ssid: wifiName, // wifiName
            pwd: wifiPassword, // '@11235813',
            device_id: deviceId,
            mqtt_server: mqttInfo.mqttServer, // '34.71.0.216',
            mqtt_port: mqttInfo.mqttPort,
            fd_channel: mqttInfo.fdChannel + `/${layoutId}/${deviceId}`, // `SmartDesk/f_d/${layoutId}/${deviceId}`
            fa_channel: mqttInfo.faChannel + `/${layoutId}/${deviceId}`, // `SmartDesk/f_a/${layoutId}/${deviceId}`
            mqtt_usr: mqttInfo.mqttUser, // 'autonomous'
            mqtt_pwd: mqttInfo.mqttPassword, // '123'
        };
    }
}
