import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppSpacing } from 'src/styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.WHITE,
        paddingTop: 18,
        paddingBottom: AppSpacing.LARGE,
        paddingHorizontal: 19.5,
    },
});
