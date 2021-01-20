import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.PRIMARY,
        height: 40,
        flex: 1,
        marginStart: 8,
        marginEnd: 8,
        borderRadius: 4,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    icon: { position: 'absolute', start: 16 },
    title: {
        fontSize: 16,
        color: AppColor.WHITE,
    },
});
