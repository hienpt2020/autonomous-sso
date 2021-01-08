import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

const imageWidth = (Dimensions.get('window').width - 32);
export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        height: 180,
        backgroundColor: 'white',
        flexDirection: 'column-reverse',
        marginStart: 16,
        marginEnd: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
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
    }
});
