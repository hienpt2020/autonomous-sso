import i18next from 'i18next';
import SuccessIcon from 'src/assets/images/ic_check_success.svg';
import { goBack } from 'src/routers/rootNavigation';
import * as React from 'react';
import { showPopup } from 'src/components';

export const showPopupSuccess = () =>
    showPopup(
        i18next.t('update_profile.popup_title_successfully'),
        i18next.t('update_profile.popup_description_successfully'),
        <SuccessIcon />,
        [
            {
                onPress: () => goBack(),
                title: i18next.t('common.ok'),
            },
        ],
    );

export const showPopupWarning = (onConfirm: () => void) =>
    showPopup(
        i18next.t('update_profile.popup_request_update_title'),
        i18next.t('update_profile.popup_request_update_description'),
        null,
        [
            {
                onPress: onConfirm,
                title: i18next.t('common.yes'),
            },
            {
                onPress: () => {},
                style: 'negative',
                title: i18next.t('common.no'),
            },
        ],
    );
