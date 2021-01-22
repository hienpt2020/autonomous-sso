import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../styles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.MAIN_BACKGROUND,
    },
    header: {
        fontSize: 24,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    titleText: {
        fontSize: AppFontSize.SIZE_28,
        marginHorizontal: AppSpacing.LARGE,
        fontWeight: '500',
        lineHeight: 38,
        marginVertical: AppSpacing.LARGE,
    },
});
