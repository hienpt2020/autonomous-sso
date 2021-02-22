import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../styles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.MAIN_BACKGROUND,
    },
    header: {
        fontSize: AppFontSize.SIZE_24,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    sectionText: {
        fontSize: AppFontSize.SIZE_28,
        marginHorizontal: AppSpacing.LARGE,
        fontWeight: '500',
        lineHeight: 38,
        marginBottom: AppSpacing.LARGE,
    },
    list: { marginTop: 68 },
    emptyContainer: { marginTop: '15.27%' },
    setupBtnContainer: {
        marginHorizontal: AppSpacing.EXTRA84,
        marginVertical: AppSpacing.LARGE,
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    setupIcon: { padding: 16, marginBottom: 3 },
});
