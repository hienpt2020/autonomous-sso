import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.WHITE,
        paddingVertical: 18,
        // paddingBottom: AppSpacing.LARGE,
        paddingHorizontal: 19.5,
        ...AppStyle.cardShadow,
    },
    infoContainer: {
        flex: 1,
    },
    address: {
        width: '60%',
    },
});
