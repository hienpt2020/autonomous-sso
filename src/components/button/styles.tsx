import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    button: {
        height: 48,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: AppColor.PRIMARY,
    },
    buttonPrimary: {
        borderColor: AppColor.PRIMARY,
        borderWidth: 2
    },
    buttonSecondary: {
        backgroundColor: AppColor.PRIMARY,
    },
    titlePrimary: {
        color: AppColor.PRIMARY,
    },
    titleSecondary: {
        color: AppColor.WHITE,
    },
});
