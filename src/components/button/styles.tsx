import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        height: 48,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: AppColor.PRIMARY,
    },
    buttonPrimary: {
        backgroundColor: AppColor.PRIMARY,
    },
    buttonSecondary: {
        borderColor: AppColor.PRIMARY,
        borderWidth: 2,
    },
    titlePrimary: {
        color: AppColor.WHITE,
    },
    titleSecondary: {
        color: AppColor.PRIMARY,
    },
});
