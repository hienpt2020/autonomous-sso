import { StyleSheet, Dimensions } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.GREY_4,
    },
    sectionContainer: {
        backgroundColor: AppColor.WHITE,
        marginStart: AppSpacing.LARGE,
        marginEnd: AppSpacing.LARGE,
        paddingStart: AppSpacing.MEDIUM,
        paddingEnd: AppSpacing.MEDIUM,
        paddingTop: AppSpacing.SMALL,
        paddingBottom: AppSpacing.SMALL,
    },

    titleLarge: {
        color: AppColor.DARK_GREY_1,
        fontSize: AppFontSize.SIZE_24,
        textAlign: 'center',
        fontWeight: '500',
    },
    iconButton: {
        position: 'absolute',
        end: 0,
    },
    content: {
        color: AppColor.DARK_GREY_1,
        fontSize: AppFontSize.SIZE_12,
        textAlign: 'center',
    },
    avatar: {
        width: 128,
        height: 128,
        alignSelf: 'center',
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
