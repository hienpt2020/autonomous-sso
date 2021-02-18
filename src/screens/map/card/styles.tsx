import { Dimensions, StyleSheet } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

const FIXED_ITEM_WIDTH = (Dimensions.get('window').width - AppSpacing.MEDIUM - AppSpacing.LARGE * 2) / 2;

export const styles = StyleSheet.create({
    itemContainer: {
        width: FIXED_ITEM_WIDTH,
        backgroundColor: AppColor.WHITE,
        ...AppStyle.cardShadow,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: AppSpacing.SMALL,
        paddingVertical: 12,
    },
    coverImage: {
        width: '100%',
        height: FIXED_ITEM_WIDTH,
    },
    button: {
        height: 24,
        backgroundColor: AppColor.BLUE_1,
        width: 59,
    },
    itemTitle: {
        flex: 1,
    },
});
