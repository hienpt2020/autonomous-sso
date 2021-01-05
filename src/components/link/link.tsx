import * as React from 'react'
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements'
import { AppInputProps } from './types'
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
export const Link = (props: AppInputProps) => {
    return (
        <View style={styles.wrapper} {...props.style}>
            <TouchableOpacity onPress={props.onPress}>
                <Text
                    style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
