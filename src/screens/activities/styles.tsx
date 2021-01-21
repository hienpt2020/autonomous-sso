import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    label: {
        color: AppColor.GREY_1,
        fontSize: AppFontSize.SIZE_14,
    },
    labelActive: {
        color: AppColor.BLUE_1,
        fontSize: AppFontSize.SIZE_14,
        fontWeight: '500',
    },
});
