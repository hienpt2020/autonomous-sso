import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { styles } from './styles';
import Icon from 'src/assets/images/empty.svg';
const imageWidth = Dimensions.get('window').width;
export const Empty = (props: any) => {
    const width: string = `${imageWidth}`;
    return (
        <View style={styles.wrapper} {...props.style}>
            <Icon width={width} height={width} />
        </View>
    );
};
