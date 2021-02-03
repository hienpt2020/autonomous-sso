import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 48,
    },
    titleText: {
        fontSize: AppFontSize.SIZE_18,
        lineHeight: 40,
        marginBottom: 4,
        fontWeight: '500',
        textAlign: 'center',
        color: AppColor.DARK_GREY_1,
        paddingHorizontal: AppSpacing.MEDIUM,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
        color: AppColor.TEXT_LIGHT,
    },
});
