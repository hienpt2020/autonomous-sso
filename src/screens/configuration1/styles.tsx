import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    button: {
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 42,
        marginStart: 16,
        marginEnd: 16,
        marginTop: 16,
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
        marginTop: 32,
        color: AppColor.PRIMARY,
    },
    chipContent: {
        color: AppColor.LIGHT,
        marginStart: 16,
        marginEnd: 16,
    },
    chipContainer: {
        alignItems: 'center',
        flexGrow: 1,
        flexDirection: 'row',
        flexBasis: 4,
        margin: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart: 16,
        paddingEnd: 16,
    },
    divider: {
        height: 0.5,
        width: '100%',
        backgroundColor: AppColor.LIGHT,
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
        margin: 16,
    },
    chipIcon: {
        position: 'absolute',
        end: 16,
    },
    header: {
        position: 'absolute',
    },
});
