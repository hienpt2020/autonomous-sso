import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    header: {
        position: 'absolute',
    },
    infoContainer: {
        backgroundColor: AppColor.WHITE,
        padding: AppSpacing.LARGE,
    },
    button: {
        marginVertical: 44,
        marginHorizontal: AppSpacing.LARGE,
    },
    sectionTitle: {
        fontSize: AppFontSize.SIZE_20,
        fontWeight: '500',
        marginBottom: 20,
    },
    policyContainer: {
        backgroundColor: AppColor.WHITE,
        padding: AppSpacing.LARGE,
    },
    sectionContent: {},
});
