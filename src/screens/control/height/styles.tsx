import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

const imageWidth = Dimensions.get('window').width - 32;
export const styles = StyleSheet.create({
    container: { height: '50%', width: 116, backgroundColor: '#C4C4C4', borderRadius: 40 },
    coverImage: {
        position: 'absolute',
        width: imageWidth,
        height: 180,
        overflow: 'hidden',
        borderRadius: 8,
    },
    itemSubTitle: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16,
        color: AppColor.LIGHT,
    },
    itemTitle: {
        paddingStart: 16,
        paddingEnd: 16,
        fontSize: 18,
        paddingBottom: 8,
        color: AppColor.WHITE,
    },
});
