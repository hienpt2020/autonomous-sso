import { StyleSheet } from 'react-native';
import { AppColor, AppFontSize } from 'src/styles';

export const styles = StyleSheet.create({
    label: {
        color: AppColor.GREY_1,
        fontSize: AppFontSize.SIZE_12,
        marginTop: -5,
    },
    labelActive: {
        color: AppColor.BLUE_1,
        fontSize: AppFontSize.SIZE_12,
        fontWeight: '500',
        marginTop: -5,
    },
});
