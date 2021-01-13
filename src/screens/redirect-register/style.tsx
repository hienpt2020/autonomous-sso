import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    wrapperLogo: {
        flex: 1,
        position: 'absolute',
        start: 0,
        end: 0,
        top: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 32,
        start: 16,
        end: 16,

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