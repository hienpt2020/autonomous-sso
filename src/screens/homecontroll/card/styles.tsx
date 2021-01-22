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
        lineHeight: 25,
        fontSize: AppFontSize.SIZE_18,
        textAlignVertical: 'center',
        color: AppColor.PRIMARY,
    },
    label: { fontWeight: 'bold' },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: AppSpacing.MEDIUM,
        marginVertical: 20,
    },
    panel: { flexDirection: 'row' },
    button: {
        height: 40,
        width: 40,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: AppColor.DARK_GREY_1,
        borderWidth: 1,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: AppSpacing.MEDIUM,
        borderTopColor: AppColor.GREY_3,
        borderTopWidth: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    timeText: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 20,
        color: AppColor.DARK_GREY_1,
    },
    upBtn: {},
    titleContainer: {},
    descriptionText: {
        fontSize: AppFontSize.SIZE_12,
        fontWeight: '400',
        lineHeight: 20,
    },
    downBtn: {
        marginHorizontal: 12,
    },
});
