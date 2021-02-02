import { showPopup } from 'src/components';
import Config from 'react-native-config';
import i18next from 'i18next';
export const showPopupForceUpdate = (onUpdate: () => void) => {
    showPopup(
        i18next.t('force_update.popup_title'),
        i18next.t('force_update.popup_message2').replace('$1', Config.APP_NAME),
        null,
        [
            {
                onPress: () => onUpdate(),
                title: i18next.t('force_update.button_update_label'),
            },
        ],
    );
};

export const showPopupRecommendedUpdate = (onUpdate: () => void, onCancel: () => void) => {
    showPopup(
        i18next.t('force_update.popup_title'),
        i18next.t('force_update.popup_message1').replace('$1', Config.APP_NAME),
        null,
        [
            {
                onPress: onUpdate,
                title: i18next.t('force_update.button_update_label'),
            },
            {
                onPress: onCancel,
                title: i18next.t('force_update.button_cancel_label'),
                style: 'negative',
            },
        ],
    );
};
