import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
    wrapper: {
        margin: 8
    },
    inputContainer: {
        padding: 4,
        borderWidth: 2,
        borderBottomWidth: 2,
        borderColor: AppColor.PRIMARY
    },
    input: { color: AppColor.PRIMARY }
});
