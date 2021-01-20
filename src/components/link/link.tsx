import * as React from 'react'
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements'
import { Props } from './types'
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from '../text';
import { AppFontSize } from 'src/styles';
export const Link = (props: Props) => {
    return (
        <View style={styles.wrapper} {...props.style}>
            <TouchableOpacity onPress={props.onPress}>
                <AppText
                    size={AppFontSize.SIZE_14}
                    style={[styles.text, { fontSize: props.size }]}>
                    {props.title}
                </AppText>
            </TouchableOpacity>
        </View>
    )
}
