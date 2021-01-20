import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    controlPanel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    heightText: {
        fontSize: 42,
        textAlign: 'center',
        color: AppColor.PRIMARY,
    },
    header: {
        position: 'absolute',
    },
    button: { height: 56, width: 56, borderRadius: 28, backgroundColor: 'red' },
});
