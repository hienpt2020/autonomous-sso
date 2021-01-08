import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    itemContainer: {
        height: 74,
        flex: 1,
        backgroundColor: AppColor.WHITE, 
        marginStart: 8, 
        marginEnd: 8, 
        marginTop: 4, 
        marginBottom: 4, 
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2, 
        borderRadius: 8,

    },
    title: {
        position: 'absolute',
        top: 8,
        start: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColor.LIGHT5F,
    },
    subTitle: {
        position: 'absolute',
        bottom: 8,
        start: 8,
        color: AppColor.LIGHT,
        fontSize: 12,
    },
    titleEnd: {
        position: 'absolute',
        top: 8,
        end: 8,
        color: AppColor.LIGHT,
        fontSize: 12,
    },
    subTitleEnd: {
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 8,
        end: 8,
        fontSize: 14,
        color: AppColor.LIGHT5F,
    },
});
