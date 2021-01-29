import { StyleSheet } from 'react-native';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: AppSpacing.LARGE,
        backgroundColor: AppColor.WHITE,
    },
    itemContainer: {
        height: 61,
    },
    date: { flex: 1, marginHorizontal: AppSpacing.SMALL, marginTop: 1 },
    divider: {
        height: 1,
        backgroundColor: '#F2F2F2',
    },
    title: {
        marginTop: AppSpacing.MEDIUM,
        marginBottom: AppSpacing.TINY,
        fontSize: AppFontSize.SIZE_20,
        fontWeight: '500',
    },
    notice: {
        fontSize: AppFontSize.SIZE_12,
        color: AppColor.RED_7,
        marginBottom: AppSpacing.MEDIUM,
    },
});
