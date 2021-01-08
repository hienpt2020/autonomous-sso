import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    wrapperLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingStart: 8,
        paddingEnd: 8,
    },
    wrapperButton: {
        flex: 1, 
        margin: 8
    },
    button: {
    },
    logo: {
        flex: 1
    }
})