import { StyleSheet, Dimensions } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

const imageWidth = Dimensions.get('window').width - 32;
export const styles = StyleSheet.create({
    itemContainer: {
        height: 240,
        backgroundColor: AppColor.WHITE,
        ...AppStyle.cardShadow,
        margin: 2,
    },
    coverImage: {
        height: 169,
    },
    infoContainer: {
        height: '100%',
        paddingHorizontal: AppSpacing.MEDIUM,
        paddingVertical: AppSpacing.SMALL,
        flex: 1,
    },
    leftContainer: { flex: 1 },
    ticketContainer: { marginTop: AppSpacing.SMALL },
    iconTicket: {
        marginBottom: 1,
    },
    itemSubTitle: {},
    itemTitle: {},
});
