import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFont, AppFontSize } from 'src/styles';

export const styles = StyleSheet.create({
    button: {
        borderRadius: 0,
        height: 48,
    },
    container: {
        borderRadius: 0,
    },
    title: {
        fontWeight: '500',
        color: AppColor.WHITE,
        fontSize: AppFontSize.SIZE_16,
        marginBottom: 2,
        fontFamily: AppFont.REGULAR,
    },
    buttonPrimary: {
        backgroundColor: AppColor.BLUE_1,
    },
    buttonSecondary: {
        backgroundColor: AppColor.GREY_3,
    },
    titlePrimary: {
        color: AppColor.WHITE,
    },
    titleIcon: {
        color: AppColor.WHITE,
    },
    titleSecondary: {
        color: '#1174DC',
    },
    iconButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColor.BLUE_1,
    },
});
