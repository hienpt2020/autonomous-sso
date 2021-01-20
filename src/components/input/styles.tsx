import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: AppColor.WHITE,
        borderWidth: 1,
        minHeight: 48,
        paddingStart: AppSpacing.MEDIUM,
        paddingEnd: AppSpacing.MEDIUM,
        borderColor: AppColor.GREY_2,
    },
    visibleContainer: {
        position: 'absolute',
        end: AppSpacing.EXTRA,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        color: AppColor.RED_7,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        fontSize: AppFontSize.SIZE_12,
        marginTop: AppSpacing.TINY,
        marginBottom: AppSpacing.TINY,
    },
});
