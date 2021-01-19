import { StyleSheet } from 'react-native';
import { AppColor, AppSpacing } from 'src/styles';

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
});
