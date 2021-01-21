import { AppColor } from 'src/styles/colors';
import { StyleSheet } from 'react-native';
import { AppFontSize } from 'src/styles';

export const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: AppFontSize.SIZE_18,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 40,
    },
    subTitle: {
        fontSize: AppFontSize.SIZE_14,
        fontWeight: '400',
        color: '#9c9c9c',
        textAlign: 'center',
    },
});
