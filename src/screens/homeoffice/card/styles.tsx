import { StyleSheet, Dimensions } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

const imageWidth = Dimensions.get('window').width - AppSpacing.LARGE * 2;
const imageHeight = imageWidth / 1.8;

export const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: AppColor.WHITE,
        ...AppStyle.cardShadow,
        margin: 2,
        marginHorizontal: AppSpacing.LARGE,
    },
    name: {
        lineHeight: 24,
    },
    coverImage: {
        height: imageHeight,
    },
    infoContainer: {
        height: '100%',
        paddingHorizontal: AppSpacing.MEDIUM,
        paddingVertical: AppSpacing.SMALL,
        flex: 1,
    },
    leftContainer: { flex: 1 },
    ticketContainer: {
        height: 20,
    },
    iconTicket: {
        marginBottom: 1,
    },
    seatTitle: {
        fontWeight: '400',
        color: AppColor.TEXT_GREY,
    },
    seatNumber: { fontWeight: '500', color: AppColor.TEXT_GREY },
    divider: {
        backgroundColor: AppColor.GREY_2,
        width: 1,
        height: 16,
    },
});
