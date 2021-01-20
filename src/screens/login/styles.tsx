import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
    },
    link: {
        flexShrink: 1,
    },
    button: {
        marginTop: 32,
        marginStart: 16,
        marginEnd: 16,
    },
});
