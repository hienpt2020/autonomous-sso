import * as React from 'react';
import { View } from 'react-native';
import { DividerProps } from './types';
import { styles } from './styles';

const Divider: React.FC<DividerProps> = ({ height = 1, style }: DividerProps) => {
    return <View style={[styles.divider, style, { height }]}></View>;
};

export default Divider;
