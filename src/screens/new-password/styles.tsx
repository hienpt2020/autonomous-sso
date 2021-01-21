import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.MAIN_BACKGROUND,
    },
    contentContainer: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
    link: {
        flexShrink: 1,
    },
    button: {
        marginStart: 16,
        marginEnd: 16,
    },
});
