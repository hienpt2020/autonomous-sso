import { Dimensions, StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

const FIXED_ITEM_WIDTH = (Dimensions.get('window').width - AppSpacing.MEDIUM - AppSpacing.LARGE * 2) / 2;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.WHITE,
        paddingBottom: AppSpacing.LARGE,
    },
    title: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_20,
        padding: AppSpacing.LARGE,
        paddingTop: 16,
        paddingBottom: 18,
    },
    list: {
        width: '100%',
        paddingBottom: 2,
    },
    chipContainer: {
        width: FIXED_ITEM_WIDTH,
        ...AppStyle.cardShadow,
        backgroundColor: AppColor.WHITE,
        marginBottom: 4,
    },
    deviceName: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 24,
        flexGrow: 1,
    },
    image: {
        width: FIXED_ITEM_WIDTH,
        height: FIXED_ITEM_WIDTH,
    },
    chipContent: {
        flex: 1,
        paddingHorizontal: AppSpacing.SMALL,
        height: 48,
    },
});
