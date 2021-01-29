import * as React from 'react';
import { View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import ImageBleSvg from 'src/assets/images/illustration-intro.svg';
const BleIntro: React.FC<Props> = ({ containerStyle }: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <ImageBleSvg />
        </View>
    );
};

export default BleIntro;
