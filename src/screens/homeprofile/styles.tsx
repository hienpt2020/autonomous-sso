import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: AppColor.WHITE,
    },
    avatar:{
        width: 128, 
        height: 128, 
        borderRadius: 64, 
        alignSelf: 'center', 
        marginBottom: 64
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
    }
});
