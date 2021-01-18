import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

const FIXED_ITEM_WIDTH = (Dimensions.get('window').width - 16 * 3) / 2;
const FIXED_ITEM_HEIGHT = 200;
export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        height: FIXED_ITEM_HEIGHT,
        // width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignContent: 'center',
        marginStart: 8,
        marginEnd: 8,
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
        height: 150,
        overflow: 'hidden',
        borderRadius: 8,
    },
    itemTitle: {
        paddingStart: 16,
        paddingEnd: 16,
        justifyContent: 'center',
        lineHeight: 140 - 106,
        fontSize: 18,
        textAlignVertical: 'center',
        color: AppColor.PRIMARY,
    },
});
