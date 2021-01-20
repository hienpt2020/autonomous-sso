import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppSpacing } from 'src/styles';
import AppText from 'src/components/text';
import { styles } from './styles';
import { AppButtonProps, AppIconButtonProps } from './types';
export const PrimaryButton = (buttonProps: AppButtonProps) => {
    return (
        <Button
            {...buttonProps}
            titleStyle={[styles.title, styles.titlePrimary]}
            buttonStyle={[styles.button, styles.buttonPrimary]}
            containerStyle={[buttonProps.containerStyle, styles.container]}
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
export const IconButton = (buttonProps: AppIconButtonProps) => {
    return (
        <TouchableOpacity style={[styles.iconButtonContainer, buttonProps.style, styles.button]}>
            <View style={{ marginStart: AppSpacing.EXTRA, marginEnd: AppSpacing.EXTRA }}>{buttonProps.icon}</View>
            <AppText style={styles.title} children={`${buttonProps.title}`} />
        </TouchableOpacity>
    );
};
