import remoteConfig from '@react-native-firebase/remote-config';
import Config from 'react-native-config';
import { IVersionCodeModel } from '../types';
import { showPopupForceUpdate, showPopupRecommendedUpdate } from './showPopup';

export const checkVersionCode = (
    onUpdate: (url: string) => void,
    onCancel: () => void,
    onChecking: (isChecking: boolean) => void,
): void => {
    let strVersionCode: string = remoteConfig().getValue('version_code').asString();
    let currentVersionCode: number = parseInt(Config.APP_BUILD_NUMBER);
    let newVersionCodeInfo: IVersionCodeModel = JSON.parse(strVersionCode);
    if (currentVersionCode < newVersionCodeInfo.minimum) {
        showPopupForceUpdate(() => onUpdate(newVersionCodeInfo.url));
    } else if (currentVersionCode >= newVersionCodeInfo.minimum && currentVersionCode < newVersionCodeInfo.recommend) {
        showPopupRecommendedUpdate(() => onUpdate(newVersionCodeInfo.url), onCancel);
    } else {
        onChecking(false);
    }
};
