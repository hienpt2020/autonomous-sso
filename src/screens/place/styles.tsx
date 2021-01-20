import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    header: {
        position: 'absolute',
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
        color: AppColor.PRIMARY,
    },
    subTitle: {
        fontSize: 18,
        marginStart: 16,
        marginEnd: 16,
        marginTop: 8,
        color: AppColor.LIGHT,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 16,
        marginEnd: 16,
        marginTop: 8,
        color: AppColor.PRIMARY,
    },
    sectionContent: {
        flexGrow: 1,
        margin: 16,
        color: AppColor.LIGHT,
    },

    chip: {
        marginTop: 16,
        marginStart: 8,
        marginEnd: 8,
    },
    list: {
        paddingStart: 8,
        paddingEnd: 8,
        flexGrow: 0,
        marginTop: 16,
    },
});
