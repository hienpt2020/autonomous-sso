import { AppColor } from './colors';
import { AppSpacing } from './spacing';

export const AppStyle = {
    cardShadow: {
        elevation: 1,
        shadowColor: AppColor.GREY_1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: AppSpacing.SHADOW_SPACING,
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
