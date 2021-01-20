import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
    },
    wrap: {
        margin: AppSpacing.MEDIUM,
    },
    term: {
        flexShrink: 1,
        padding: AppSpacing.MEDIUM,
    },
    link: {
        flexShrink: 1,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    title: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
    },
    input: {
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        color: AppColor.DARK_GREY_1,
    },
    button: {
        margin: AppSpacing.LARGE,
    },
});
