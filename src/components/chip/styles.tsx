import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFont, AppFontSize, AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        height: 82,
        backgroundColor: AppColor.WHITE,
    },
    list: {
        flexGrow: 0,
    },
    chipContainer: {
        height: 30,
        paddingHorizontal: 12,
        backgroundColor: AppColor.GREY_F5,
        borderRadius: 16,
    },
    listContent: {
        paddingHorizontal: AppSpacing.LARGE,
    },
    chipLabel: {
        fontSize: AppFontSize.SIZE_12,
        fontWeight: '500',
        color: AppColor.TEXT_GREY,
    },
});
