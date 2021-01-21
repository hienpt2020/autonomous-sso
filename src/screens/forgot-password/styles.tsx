import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
    },
    link: {
        flexShrink: 1,
    },
    button: {
        margin: AppSpacing.LARGE,
    },
    title: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
    error: {
        color: AppColor.RED_7,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        fontSize: AppFontSize.SIZE_12,
        marginTop: AppSpacing.TINY,
        marginBottom: AppSpacing.TINY,
    },
    input: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
});
