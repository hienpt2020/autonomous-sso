import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppColor.WHITE,
    },
    avatarContainer: {
        width: 128,
        height: 128,
        borderRadius: 64,
        alignSelf: 'center',
        marginBottom: 64,
        backgroundColor: AppColor.WHITE,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowColor: AppColor.PRIMARY,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
    },
    avatar: {
        width: 128,
        height: 128,
    },
    header: {
        fontSize: 24,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    containerButton: {
        marginStart: 16,
        marginEnd: 16,
        marginTop: 8,
        marginBottom: 8,
    },
});
