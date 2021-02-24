import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.GREY_4,
        justifyContent: 'center',
    },
    title: {
        marginTop: 96,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        lineHeight: 38,
        fontSize: 28,
    },
    link: {
        flexShrink: 1,
    },
    input: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        color: AppColor.DARK_GREY_1,
    },
    button: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
    facebookButton: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        backgroundColor: AppColor.BLUE_3B5998,
    },
    googleButton: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        backgroundColor: AppColor.RED_DB4437,
    },
    error: {
        color: AppColor.RED_7,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        fontSize: AppFontSize.SIZE_12,
        marginTop: AppSpacing.TINY,
        marginBottom: AppSpacing.TINY,
    },
    dividerContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    divider: {
        flex: 1,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
    dividerText: {
        fontSize: AppFontSize.SIZE_12,
        color: AppColor.GREY_1,
        textAlign: 'center',
        alignContent: 'center',
    },
    appleButton: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        backgroundColor: AppColor.DARK_GREY_1,
    },
});
