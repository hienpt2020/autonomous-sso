import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        height: 44,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        width: '30%',
    },
    safeView: {
        backgroundColor: AppColor.WHITE,
    },
    withBack: {
        justifyContent: 'space-between',
    },
    space: {
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        marginStart: 16,
    },
    titleX: {
        fontWeight: '700',
    },
    subTitle: {
        fontWeight: '400',
    },
});
