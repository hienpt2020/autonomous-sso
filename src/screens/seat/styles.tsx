import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
const imageHeight = 221
const screenWidth = Dimensions.get('window').width
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    header: {
        fontSize: 24,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    button: {
        bottom: 16,
        start: 16,
        end: 16,
        position: 'absolute'
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
        marginTop: 8,
        color: AppColor.PRIMARY,
    },
    sectionContent: {
        flexGrow: 1,
        margin: 16,
        color: AppColor.LIGHT,
    },
    sliderTitle: {
        fontSize: 10,
        position: 'absolute',
        bottom: 16,
        color: AppColor.WHITE,
        end: 16,
    },
    sliderContainer: {
        height: imageHeight,
        backgroundColor: 'orange'
    },
    coverImage: {
        position: 'absolute',
        height: imageHeight,
        width: screenWidth,
        top: 0,
        bottom: 0,
        start: 0,
        end: 0,
    },
    list: { 
        paddingStart: 8, 
        paddingEnd: 8, 
        flexGrow: 0, 
        marginTop: 16, 

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
