import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing, AppStyle } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        minHeight: 48,
    },
    title: {
        fontSize: AppFontSize.SIZE_14,
        color: AppColor.DARK_GREY_1,
    },
    space: {
        flex: 1,
    },
    notification: {
        position: 'absolute',
        top: 2,
        right: -7,
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: AppColor.BLUE_1,
    },
    infoContainer: {
        flex: 1,
    },
    value: {
        marginEnd: AppSpacing.MEDIUM,
        fontSize: AppFontSize.SIZE_16,
        color: AppColor.BLUE_2,
        fontWeight: '500',
    },
    valueDisable: {
        marginEnd: AppSpacing.MEDIUM,
        fontSize: AppFontSize.SIZE_14,
        color: AppColor.GREY_1,
        fontWeight: '500',
    },
});
