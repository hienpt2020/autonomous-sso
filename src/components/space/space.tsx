import * as React from 'react';
import { View } from 'react-native';
import { SpaceProps } from './types';

const Space: React.FC<SpaceProps> = ({ width = 0, height = 0, flex = 0 }: SpaceProps) => {
    return <View style={{ width, height, flex }}></View>;
};

export default Space;
