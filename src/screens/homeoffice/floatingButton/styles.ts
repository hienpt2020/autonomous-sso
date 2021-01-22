import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        height: 48,
        backgroundColor: AppColor.PRIMARY,
        borderRadius: 24,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: AppColor.WHITE,
        fontWeight: 'bold',
    },
});

export default styles;
