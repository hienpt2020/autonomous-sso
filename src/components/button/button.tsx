import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from 'src/components/text';
import { AppSpacing } from 'src/styles';
import { styles } from './styles';
import { AppButtonProps, AppIconButtonProps } from './types';
export const PrimaryButton = (buttonProps: AppButtonProps) => {
    return (
        <Button
            {...buttonProps}
            titleStyle={[styles.title, styles.titlePrimary]}
            buttonStyle={[styles.button, styles.buttonPrimary]}
            disabledTitleStyle={styles.disableStyle}
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
export const SocialButton = (buttonProps: AppIconButtonProps) => {
    return (
        <TouchableOpacity style={[styles.iconButtonContainer, buttonProps.style, styles.button]}>
            <View style={styles.iconContainer}>{buttonProps.icon}</View>
            <AppText style={styles.title} children={`${buttonProps.title}`} />
        </TouchableOpacity>
    );
};
export const IconButton = (buttonProps: AppIconButtonProps) => {
    return (
        <View style={[buttonProps.style, styles.icon]}>
            <TouchableOpacity>{buttonProps.icon}</TouchableOpacity>
        </View>
    );
};
