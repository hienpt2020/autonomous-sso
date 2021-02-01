import { showPopup } from 'src/components';
import Config from 'react-native-config';

export const showPopupForceUpdate = (onUpdate: () => void) => {
    showPopup('Update Available', `An update to ${Config.APP_NAME} is required to continue`, null, [
        {
            onPress: () => onUpdate(),
            title: 'Update',
        },
    ]);
};

export const showPopupRecommendedUpdate = (onUpdate: () => void, onCancel: () => void) => {
    showPopup('Update Available', `An update to ${Config.APP_NAME} is available. Would you like to update?`, null, [
        {
            onPress: onUpdate,
            title: 'Update',
        },
        {
            onPress: onCancel,
            title: 'Not Now',
            style: 'negative',
        },
    ]);
};
