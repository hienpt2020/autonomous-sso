import { Platform, StatusBar, StyleSheet } from 'react-native';
import { AppColor } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        height: 44,
        paddingHorizontal: 20,
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    buttonContainer: {
        width: '30%',
    },
    safeView: {
        // backgroundColor: AppColor.WHITE,
    },
    headerSafeView: {
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
        fontWeight: '500',
    },
    subTitle: {
        fontWeight: '500',
    },
});
