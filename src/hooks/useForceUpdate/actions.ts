import { showPopup } from 'src/components';
import { View } from 'react-native';
import { Loading } from '../../components/loading';
import React from 'react';

export const showPopupForceUpdate = (onUpdate: () => void) => {
    showPopup('Update', 'You have a new version. Do you want to update?', null, [
        {
            onPress: () => onUpdate(),
            title: 'Ok',
        },
    ]);
};

export const showPopupRecommendedUpdate = (onUpdate: () => void, onCancel: () => void) => {
    showPopup('Recommended Update', 'You have a new version. Do you want to update?', null, [
        {
            onPress: onUpdate,
            title: 'Ok',
        },
        {
            onPress: onCancel,
            title: 'Cancel',
            style: 'negative',
        },
    ]);
};
