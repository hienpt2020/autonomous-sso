import { StyleSheet, Dimensions } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
const imageHeight = 264;
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
        height: imageHeight,
        width: screenWidth,
    },
    sliderTitleContainer: {
        position: 'absolute',
        right: AppSpacing.MEDIUM,
        bottom: AppSpacing.MEDIUM,
        height: 19,
        backgroundColor: AppColor.ALPHA_40,
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    sliderTitle: {
        fontSize: AppFontSize.SIZE_11,
        color: AppColor.GREY_2,
        fontWeight: '500',
    },
    sliderContainer: {
        height: imageHeight,
    },
    coverImage: {
        position: 'absolute',
        height: imageHeight,
        width: screenWidth,
        top: 0,
        bottom: 0,
        start: 0,
        end: 0,
        backgroundColor: 'black',
        opacity: 0.3,
    },
});
