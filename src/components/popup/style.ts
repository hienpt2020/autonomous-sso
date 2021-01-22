import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.ALPHA_40,
    },
    popup: {
        backgroundColor: AppColor.WHITE,
        width: 311,
        paddingHorizontal: AppSpacing.MEDIUM + 2,
        paddingVertical: AppSpacing.LARGE,
    },
    buttonContainer: { width: '100%' },
});
