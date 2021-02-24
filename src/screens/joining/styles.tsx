import { StyleSheet } from 'react-native';
import { AppSpacing, AppStyle } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.WHITE,
    },
    body: {
        flex: 1,
        paddingHorizontal: AppSpacing.LARGE,
        justifyContent: 'center',
    },
    term: {
        textAlign: 'center',
    },
    button: {},
});
