import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    button: {
        paddingHorizontal: 16,
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
        marginTop: 32,
        color: AppColor.PRIMARY,
    },
    divider: {
        height: 0.5,
        width: '100%',
        backgroundColor: AppColor.LIGHT,
    },
    list: {
        marginHorizontal: AppSpacing.LARGE,
        marginVertical: AppSpacing.LARGE,
    },
    header: {
        position: 'absolute',
    },
    spacingContainer: {
        backgroundColor: AppColor.WHITE,
    },
    spacing: {
        marginHorizontal: AppSpacing.MEDIUM,
        height: 1,
        backgroundColor: AppColor.GREY_3,
    },
});
