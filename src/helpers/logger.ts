import reactotron from 'src/config/configReactoron';
import _ from 'lodash';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

export interface Logger {
    debug(message?: any, ...optionalParams: any[]): void;
    verbose(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}

export class LoggerImpl implements Logger {
    private instance?: Console = __DEV__ ? reactotron : undefined;

    public debug(message?: any, ...optionalParams: any[]): void {
        this.instance?.debug(`${this.stringify(message)}, ${this.stringify(optionalParams)}`);
    }

    public verbose(message?: any, ...optionalParams: any[]): void {
        this.debug(message, optionalParams);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.instance?.log(message, optionalParams);

        let firebaseAnalyticParam = {};
        if (optionalParams[0]) {
            firebaseAnalyticParam = { ...optionalParams[0] };
        }
        analytics().logEvent(message, firebaseAnalyticParam);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.instance?.warn(`${this.stringify(message)}, ${this.stringify(optionalParams)}`);
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.instance?.error(`${this.stringify(message)}, ${this.stringify(optionalParams)}`);
        crashlytics().recordError(message);
    }

    private stringify(metaData: any): string {
        return metaData && !_.isEmpty(metaData) ? JSON.stringify(metaData) : '';
    }
}
export const Log: Logger = new LoggerImpl();
