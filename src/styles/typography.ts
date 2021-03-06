import { Platform } from 'react-native';
export enum AppFontSize {
    SIZE_10 = 10,
    SIZE_11 = 11,
    SIZE_12 = 12,
    SIZE_13 = 13,
    SIZE_14 = 14,
    SIZE_16 = 16,
    SIZE_18 = 18,
    SIZE_20 = 20,
    SIZE_24 = 24,
    SIZE_28 = 28,
    SIZE_32 = 32,
    SIZE_36 = 36,
    SIZE_48 = 48,
}

export const AppFont = {
    REGULAR: Platform.OS == 'ios' ? 'Centra No2' : 'CentraNo2-Medium',
};
