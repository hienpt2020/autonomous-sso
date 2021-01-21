import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        height: 54,
        backgroundColor: AppColor.WHITE,
    },
    list: {
        flexGrow: 0,
    },
    chipContainer: {
        height: 30,
        paddingHorizontal: 12,
        backgroundColor: AppColor.BLUE_IN_TAG,
        borderRadius: 16,
    },
    listContent: {
        paddingHorizontal: AppSpacing.LARGE,
    },
});
