import { Dimensions, StyleSheet } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

const FIXED_ITEM_HEIGHT = 217;
const FIXED_ITEM_WIDTH = (Dimensions.get('window').width - AppSpacing.MEDIUM - AppSpacing.LARGE * 2) / 2;
const IMAGE_HEIGHT = 159;

export const styles = StyleSheet.create({
    itemContainer: {
        height: FIXED_ITEM_HEIGHT,
        width: FIXED_ITEM_WIDTH,
        backgroundColor: AppColor.WHITE,
        ...AppStyle.cardShadow,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: AppSpacing.SMALL,
    },
    coverImage: {
        width: '100%',
        height: IMAGE_HEIGHT,
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
