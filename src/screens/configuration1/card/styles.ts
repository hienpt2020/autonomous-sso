import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: AppColor.WHITE,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: AppSpacing.MEDIUM,
    },
    name: {
        lineHeight: 26,
        fontWeight: '500',
    },
    left: { height: '100%', justifyContent: 'center', alignItems: 'center' },
    bleIcon: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.GREY_F5,
        borderRadius: 24,
    },
    center: {
        flex: 1,
        height: '100%',
        marginHorizontal: AppSpacing.SMALL,
        justifyContent: 'center',
    },
    right: { height: '100%', justifyContent: 'center' },
    connectText: {
        borderRadius: 10,
        color: AppColor.WHITE,
        fontSize: AppFontSize.SIZE_11,
        lineHeight: 20,
        fontWeight: '500',
    },
    textContainer: {
        backgroundColor: AppColor.DARK_GREY_1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});
