import { Platform, StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    button: {
        marginBottom: 24,
    },
    labelText: { color: AppColor.DARK_GREY_1, fontSize: AppFontSize.SIZE_18, lineHeight: 28, marginTop: 34 },
    descriptionText: {
        color: AppColor.TEXT_LIGHT,
        lineHeight: 24,
        marginTop: 16,
        marginHorizontal: 48,
        textAlign: 'center',
    },
    content: { flex: 1, alignItems: 'center', marginHorizontal: AppSpacing.LARGE, marginTop: 83 },
    bottom: { marginHorizontal: AppSpacing.LARGE, marginBottom: AppSpacing.LARGE },
});
