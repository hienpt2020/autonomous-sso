import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing, AppStyle } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        minHeight: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: AppFontSize.SIZE_12,
        color: AppColor.DARK_GREY_1,
        flexGrow: 1,
    },
    infoContainer: {
        flex: 1,
    },
    value: {
        marginEnd: AppSpacing.MEDIUM,
        fontSize: AppFontSize.SIZE_14,
        color: AppColor.BLUE_2,
        fontWeight: '500',
    },
});
