import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 4,
        marginHorizontal: 48,
        textAlign: 'center',
        marginTop: 54,
        color: AppColor.DARK_GREY_1,
        fontWeight: '400',
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 24,
        marginHorizontal: 24,
        textAlign: 'center',
        color: AppColor.TEXT_LIGHT,
    },
});
