import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.WHITE,
    },
    button: {
        bottom: 16,
        start: 16,
        end: 16,
        position: 'absolute',
    },
    title: {
        fontSize: 42,
        marginStart: 16,
        marginEnd: 16,
        marginTop: 16,
        color: AppColor.PRIMARY,
    },
    subTitle: {
        fontSize: 20,
        marginStart: 32,
        marginEnd: 32,
        textAlign: 'center',
        marginTop: 8,
        color: AppColor.LIGHT,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 16,
        marginEnd: 16,
        marginTop: 32,
        color: AppColor.PRIMARY,
    },
});
