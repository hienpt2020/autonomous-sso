import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    header: {
        paddingHorizontal: AppSpacing.LARGE,
    },
    info: {
        marginHorizontal: AppSpacing.LARGE,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        paddingHorizontal: AppSpacing.LARGE,
        paddingBottom: AppSpacing.LARGE,
    },
});
