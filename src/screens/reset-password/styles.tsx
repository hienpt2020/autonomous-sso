import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
    },
    link: {
        flexShrink: 1,
    },
    contentContainer: { flex: 1, marginStart: AppSpacing.LARGE, marginEnd: AppSpacing.LARGE },
    button: {
        marginStart: 16,
        marginEnd: 16,
    },
});
