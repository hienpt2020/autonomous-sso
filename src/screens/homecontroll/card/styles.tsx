import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppFontSize, AppSpacing } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
        flexDirection: 'column',
        alignContent: 'center',
        marginHorizontal: AppSpacing.LARGE,
    },
    coverImage: {
        height: 182,
        overflow: 'hidden',
    },
    titleText: {
        justifyContent: 'center',
        lineHeight: 28,
        fontSize: AppFontSize.SIZE_18,
        textAlignVertical: 'center',
        color: AppColor.PRIMARY,
    },
    label: { fontWeight: 'bold' },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: AppSpacing.MEDIUM,
        marginVertical: AppSpacing.MEDIUM,
    },
    panel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: AppColor.WHITE,
        paddingVertical: AppSpacing.MEDIUM,
        marginHorizontal: AppSpacing.MEDIUM,
        borderTopWidth: 1,
        borderTopColor: AppColor.GREY_3,
    },
    button: {
        height: 48,
        width: 48,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        borderColor: AppColor.DARK_GREY_1,
        borderWidth: 1,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: AppSpacing.MEDIUM,
        paddingBottom: AppSpacing.MEDIUM,
        alignItems: 'center',
    },
    timeText: {
        fontWeight: '400',
        lineHeight: 20,
        color: AppColor.DARK_GREY_1,
    },
    titleContainer: {},
    descriptionText: {
        fontSize: AppFontSize.SIZE_12,
        fontWeight: '400',
        lineHeight: 20,
        paddingHorizontal: AppSpacing.MEDIUM,
        color: AppColor.WHITE,
    },
    descriptionContainer: {
        backgroundColor: AppColor.DARK_GREY_1,
        borderRadius: 10,
    },
});
