import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppButtonProps } from './types';
import { styles } from './styles';
export const PrimaryButton = (buttonProps: AppButtonProps) => {
    return (
        <View style={buttonProps.wrapperContainer}>
            <Button
                {...buttonProps}
                titleStyle={[styles.title, styles.titlePrimary]}
                buttonStyle={[styles.button, styles.buttonPrimary]}
            />
        </View>
    );
};
export const SecondaryButton = (buttonProps: AppButtonProps) => {
    return (
        <View style={buttonProps.wrapperContainer}>
            <Button
                {...buttonProps}
                type="outline"
                titleStyle={[styles.title, styles.titleSecondary]}
                buttonStyle={[styles.button, styles.buttonSecondary]}
            />
        </View>
    );
};
