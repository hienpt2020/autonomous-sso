import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import styles from './style';
import { Props } from './types';

export const Spinner = (props: Props) => {
    const requestReducer = useSelector((state: RootState) => state.requestReducer);

    if (!requestReducer.isLoading) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
};
