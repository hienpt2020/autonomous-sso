import { StyleSheet, Dimensions } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    timeSelect: { width: '100%' },
    bottomSheetHeader: {
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: AppColor.WHITE,
    },
    bottomSheetContainer: {
        backgroundColor: AppColor.WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 300,
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: { position: 'absolute', end: 16, top: 8, fontSize: 16 },
    overlay: { backgroundColor: AppColor.ALPHA_40, position: 'absolute', top: 0, bottom: 0, start: 0, end: 0 },
});
