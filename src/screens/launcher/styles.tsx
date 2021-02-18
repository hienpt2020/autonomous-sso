import { StyleSheet } from 'react-native';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.GREY_4,
    },
    logo: {},
    text: {
        position: 'absolute',
        bottom: AppSpacing.EXTRA,
        fontSize: AppFontSize.SIZE_18,
    },
});
