import { StyleSheet, Dimensions } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
import { AppStyle } from 'src/styles/';
import { Space } from 'src/components';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.MAIN_BACKGROUND,
    },
    itemContainer: {
        flexGrow: 1,
        minHeight: 26,
    },
    title: {
        fontSize: AppFontSize.SIZE_16,
        fontWeight: '500',
    },
    content: {
        color: AppColor.LIGHT,
        fontSize: AppFontSize.SIZE_14,
    },
    contentHightLight: {
        color: AppColor.BLUE_1174DC,
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_14,
    },
    divider: {
        height: 1,
        flex: 1,
        backgroundColor: AppColor.GREY_3,
    },
    chipIcon: {
        position: 'absolute',
        end: 16,
    },
    buttonContainer: {
        marginStart: AppSpacing.MEDIUM,
        marginEnd: AppSpacing.MEDIUM,
    },
    list: {
        flexGrow: 0,
        ...AppStyle.sectionContainer,
    },
});
