import * as React from 'react';
import { View } from 'react-native';
import { DividerProps } from './types';
import { styles } from './styles';

const Divider: React.FC<DividerProps> = ({ width = '100%', height = 1 }: DividerProps) => {
    return <View style={[styles.divider, { width, height }]}></View>;
};

export default Divider;
