import { StyleSheet, Dimensions } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
    image: {
        width: screenWidth,
        height: '100%',
    },
    sliderTitleContainer: {
        position: 'absolute',
        right: AppSpacing.MEDIUM,
        bottom: AppSpacing.MEDIUM,
        height: 20,
        backgroundColor: AppColor.WHITE,
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    sliderTitle: {
        fontSize: AppFontSize.SIZE_11,
        fontWeight: '500',
    },
    sliderContainer: {
        width: screenWidth,
    },
    imageOverlay: {
        position: 'absolute',
        width: screenWidth,
        top: 0,
        bottom: 0,
        start: 0,
        end: 0,
    },
    imageOverlayTop: {
        position: 'absolute',
        width: screenWidth,
        top: 0,
        height: 100,
        start: 0,
        end: 0,
    },
});
