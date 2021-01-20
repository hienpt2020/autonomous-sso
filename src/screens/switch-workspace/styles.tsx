import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    itemContainer: {
        marginStart: 8,
        marginEnd: 8,
        marginTop: 4,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 4,
    },
    content: {
        fontSize: 16,
        margin: 16,
        color: AppColor.LIGHT,
    },
    divider: {
        height: 0.5,
        width: '100%',
        backgroundColor: AppColor.LIGHT,
    },
    chipIcon: {
        position: 'absolute',
        end: 16,
    },
    buttonContainer: {
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 16,
    },
});
