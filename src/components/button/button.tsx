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
            activeOpacity={1}
            {...buttonProps}
            titleStyle={[styles.title, styles.titlePrimary, buttonProps.titleStyle]}
            buttonStyle={[styles.button, styles.buttonPrimary, buttonProps.buttonStyle]}
            disabledTitleStyle={[styles.disableStyle, buttonProps.disabledTitleStyle]}
            containerStyle={[styles.container, buttonProps.containerStyle]}
        />
    );
};
export const SecondaryButton = (buttonProps: AppButtonProps) => {
    return (
        <Button
            activeOpacity={1}
            {...buttonProps}
            titleStyle={[styles.title, styles.titleSecondary, buttonProps.titleStyle]}
            buttonStyle={[styles.button, styles.buttonSecondary, buttonProps.buttonStyle]}
            containerStyle={[styles.container, buttonProps.containerStyle]}
        />
    );
};
export const SocialButton = (buttonProps: AppIconButtonProps) => {
    return (
        <TouchableOpacity style={[styles.iconButtonContainer, buttonProps.style, styles.button]} activeOpacity={1}>
            <View style={styles.iconContainer}>{buttonProps.icon}</View>
            <AppText style={styles.title} children={`${buttonProps.title}`} />
        </TouchableOpacity>
    );
};
export const IconButton = (buttonProps: AppIconButtonProps) => {
    return (
        <View style={[buttonProps.style, styles.icon]}>
            <TouchableOpacity activeOpacity={1} onPress={buttonProps.onPress}>
                {buttonProps.icon}
            </TouchableOpacity>
        </View>
    );
};
