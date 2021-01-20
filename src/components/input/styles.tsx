import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: AppColor.WHITE,
        borderWidth: 1,
        minHeight: 48,
        paddingStart: AppSpacing.MEDIUM,
        paddingEnd: AppSpacing.MEDIUM,
        borderColor: AppColor.GREY_2
    }
});
