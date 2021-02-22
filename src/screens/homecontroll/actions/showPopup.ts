import i18next from 'i18next';
import { showPopup } from 'src/components';

export function showPopupWarning(onConfirm: () => void): void {
    showPopup(i18next.t('device.popup_warning_title'), i18next.t('device.popup_warning_message'), null, [
        {
            onPress: onConfirm,
            title: i18next.t('common.yes'),
        },
        {
            onPress: () => {},
            style: 'negative',
            title: i18next.t('common.no'),
        },
    ]);
}
