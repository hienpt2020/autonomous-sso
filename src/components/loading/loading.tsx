import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './style';
import { Props } from './types';
import { AppColor } from '../../styles';

export const Loading = (props: Props = defaultProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={props.color} />
        </View>
    );
};

const defaultProps: Props = {
    color: AppColor.LIGHT5F,
};
