import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    contentContainer: {
        flex: 1,
    },
    button: {
        marginHorizontal: AppSpacing.LARGE,
        marginBottom: 44,
        marginTop: AppSpacing.LARGE,
    },
    codeContainer: {
        width: 64,
        height: 70,
        backgroundColor: '#DDDDDD',
        borderRadius: 16,
    },
    code: {
        fontSize: AppFontSize.SIZE_36,
        fontWeight: '500',
        color: '#555555',
    },
    note: {
        fontSize: AppFontSize.SIZE_11,
        color: AppColor.ORANGE_1,
        textAlign: 'center',
    },
});
