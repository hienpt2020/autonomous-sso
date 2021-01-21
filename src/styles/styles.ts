import { AppColor } from './colors';
import { AppSpacing } from './spacing';

export const AppStyle = {
    cardShadow: {
        elevation: 4,
        shadowColor: AppColor.GREY_3,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
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
};
