import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: AppColor.ALPHA_40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: AppSpacing.LARGE,
    },
    sectionTitle: {
        fontSize: AppFontSize.SIZE_18,
        lineHeight: 28,
        marginTop: AppSpacing.LARGE,
        marginBottom: 16,
        color: AppColor.DARK_GREY_1,
        textAlign: 'center',
        fontWeight: '400',
    },
    btnContainerStyle: {
        flex: 1,
        marginVertical: AppSpacing.LARGE,
    },
    connectBtn: {
        marginRight: 5,
    },
    cancelBtn: {
        marginLeft: 5,
    },
    cancelButtonStyle: {
        backgroundColor: AppColor.WHITE,
        borderWidth: 1,
        borderColor: AppColor.GREY_1,
    },
    buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    textStyle: {
        fontSize: 14,
    },
});
