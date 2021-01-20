import * as React from 'react';
import { View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
const Height = (props: Props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: `${props.percent}%`,
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopRightRadius: props.percent === 100 ? 40 : 0,
                    borderTopLeftRadius: props.percent === 100 ? 40 : 0,
                }}
            />
        </View>
    );
};

export default Height;
