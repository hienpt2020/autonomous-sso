import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppButtonProps } from './types';
import { styles } from './styles';
export const PrimaryButton = (buttonProps: AppButtonProps) => {
    return (
        <Button
            {...buttonProps}
            titleStyle={[styles.title, styles.titlePrimary]}
            buttonStyle={[styles.button, styles.buttonPrimary]}
            containerStyle={styles.container}
        />
    );
};
export const SecondaryButton = (buttonProps: AppButtonProps) => {
    return (
        <Button
            {...buttonProps}
            titleStyle={[styles.title, styles.titleSecondary]}
            buttonStyle={[styles.button, styles.buttonSecondary]}
            containerStyle={styles.container}
        />
    );
};
