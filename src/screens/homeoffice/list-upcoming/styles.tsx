import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 56,
    },
    header: {
        height: 84,
        marginLeft: AppSpacing.LARGE,
    },
    itemContainer: {
        backgroundColor: AppColor.WHITE,
        padding: AppSpacing.MEDIUM,
        ...AppStyle.cardShadow,
        width: 270,
        marginRight: AppSpacing.SMALL,
        ...AppStyle.cardShadow,
        margin: 1,
    },
    list: { width: '100%', paddingLeft: AppSpacing.LARGE },
    infoContainer: {
        flex: 1,
    },
    address: { fontSize: AppFontSize.SIZE_12, color: '#555555' },
    placeName: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_16,
        flex: 1,
    },
    workSpaceName: {
        fontWeight: '500',
        color: '#555555',
    },
    bookingStatusContainer: {
        height: 20,
        backgroundColor: AppColor.DARK_GREY_1,
        paddingHorizontal: AppSpacing.SMALL,
        borderRadius: 16,
    },
    bookingStatus: {
        fontSize: AppFontSize.SIZE_11,
        color: AppColor.WHITE,
        fontWeight: '500',
    },
});
