import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
const imageHeight = 221;
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
    sliderTitle: {
        fontSize: 10,
        position: 'absolute',
        bottom: 16,
        color: AppColor.WHITE,
        end: 16,
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
    },
});
