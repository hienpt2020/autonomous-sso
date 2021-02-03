import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    list: {
        paddingHorizontal: AppSpacing.LARGE,
        paddingVertical: AppSpacing.LARGE,
    },
    itemContainer: {
        backgroundColor: AppColor.WHITE,
        padding: AppSpacing.MEDIUM,
    },
    dividerContainer: {
        backgroundColor: AppColor.WHITE,
        height: 1,
        flex: 1,
    },
    divider: {
        marginHorizontal: AppSpacing.MEDIUM,
    },
    icArrow: {
        position: 'absolute',
        right: AppSpacing.MEDIUM,
        top: AppSpacing.MEDIUM,
    },
    status: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_11,
        color: AppColor.GREEN_1,
    },
    statusInActive: {
        color: AppColor.TEXT_LIGHT,
    },
    title: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_16,
    },
    subTitle: {
        fontSize: AppFontSize.SIZE_14,
    },
    titleEnd: {
        fontSize: AppFontSize.SIZE_11,
    },
    subTitleEnd: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_14,
    },
    dateContainer: {
        height: 24,
        backgroundColor: '#F2F2F2',
        borderRadius: 16,
        paddingHorizontal: 10,
    },
});
