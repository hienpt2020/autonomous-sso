import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        flexGrow: 0,
    },
    chipContainer: {
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        paddingStart: 16,
        paddingEnd: 16,
        backgroundColor: AppColor.PRIMARY,
        borderRadius: 12,
    },

    chipContent: {
        color: AppColor.WHITE,
    },
});
