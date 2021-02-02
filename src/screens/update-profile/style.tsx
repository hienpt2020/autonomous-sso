import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';
import { AppSpacing } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    contentContainer: { flex: 1, padding: AppSpacing.LARGE, backgroundColor: AppColor.BACKGROUND },
});
