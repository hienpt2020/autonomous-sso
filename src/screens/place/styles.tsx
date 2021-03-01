import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.BACKGROUND,
    },
    header: {
        position: 'absolute',
    },
    infoContainer: {
        backgroundColor: AppColor.WHITE,
        padding: AppSpacing.LARGE,
        ...AppStyle.cardShadow,
    },
    buttonContainer: {
        marginVertical: 44,
        flex: 1,
    },
    button: {
        marginHorizontal: AppSpacing.LARGE,
        flexGrow: 1,
    },
    secondaryButtonStyle: {
        borderWidth: 1,
        borderColor: AppColor.DARK_GREY_1,
        backgroundColor: AppColor.WHITE,
    },
    placeName: {
        flex: 1,
    },
    workSpaceName: {
        color: AppColor.TEXT_GREY,
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_16,
        lineHeight: 26,
    },
    address: {
        lineHeight: 24,
    },
    bookingStatusContainer: {
        height: 20,
        backgroundColor: AppColor.DARK_GREY_1,
        paddingHorizontal: AppSpacing.SMALL,
        borderRadius: 16,
    },
    bookingStatus: {
        fontSize: AppFontSize.SIZE_11,
        color: AppColor.WHITE,
        fontWeight: '500',
    },
    sectionTitle: {
        fontSize: AppFontSize.SIZE_20,
        fontWeight: '500',
        marginBottom: 20,
    },
    codeTitle: {
        fontSize: AppFontSize.SIZE_20,
        fontWeight: '500',
        marginTop: AppSpacing.MEDIUM,
    },
    policyContainer: {
        backgroundColor: AppColor.WHITE,
        paddingHorizontal: AppSpacing.LARGE,
        paddingVertical: 16,
        ...AppStyle.cardShadow,
    },
    sectionContent: {},
    codeContainer: {
        backgroundColor: AppColor.WHITE,
        paddingHorizontal: AppSpacing.LARGE,
    },
    codeLineContainer: {
        height: 56,
    },
    codeDesc: {
        fontSize: AppFontSize.SIZE_12,
        flex: 1,
    },
    codeNumberContainer: {
        height: 24,
        width: 24,
        borderRadius: 4,
        backgroundColor: '#F8F8F8',
    },
    code: {
        fontWeight: '500',
        fontSize: AppFontSize.SIZE_16,
        color: '#555555',
    },
});
