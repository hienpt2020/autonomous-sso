import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    list: {
        flexGrow: 0,
    },
    chipContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexBasis: 4, 
        marginStart: 8, 
        marginTop: 4, 
        marginBottom: 4, 
        marginEnd: 8,
        borderColor: AppColor.PRIMARY,
        borderWidth: 1,
        borderRadius: 8,
    },
    
    chipContent: {
    },
    chipIcon: {
        position: 'absolute', 
        start: 16, 
    },
    chipMutableContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexBasis: 4, 
        marginStart: 8, 
        marginTop: 4, 
        marginBottom: 4, 
        marginEnd: 8,
        backgroundColor: AppColor.PRIMARY,
        borderRadius: 8,
    },
    
    chipMutableContent: {
        color: AppColor.WHITE
    },
    chipMutableIcon: {
        position: 'absolute', 
        end: 16, 
    }

});
