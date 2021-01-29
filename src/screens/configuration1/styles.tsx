import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    list: {
        marginHorizontal: AppSpacing.LARGE,
        marginVertical: AppSpacing.LARGE,
    },
    spacingContainer: {
        backgroundColor: AppColor.WHITE,
    },
    spacing: {
        marginHorizontal: AppSpacing.MEDIUM,
        height: 1,
        backgroundColor: AppColor.GREY_3,
    },
    button: { marginHorizontal: AppSpacing.LARGE, marginBottom: 44 },
    content: { flex: 1, alignItems: 'center', marginHorizontal: AppSpacing.LARGE },
});
