import { DeviceApi } from 'src/services/networking';

export class ConfigStep1Actions {
    getMqttInfo = async () => {
        try {
            console.log('@mdmasdmadmsmsd1:');
            const res: any = await DeviceApi.getMqttInfo();
            console.log('@ Get Mqtt Info', res);
            return res;
        } catch (error) {
            console.log('@mdmasdmadmsmsd:2', error);
            return [];
        }
    };
}

export interface IConfigStep1Actions {
    getMqttInfo(): Promise<any>;
}
