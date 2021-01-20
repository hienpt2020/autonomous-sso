import * as React from 'react';
import { Text, View } from 'react-native';
import { PropsHeader, PropsBackHeader } from './types';
import Icon from 'src/assets/images/back.svg';
import IconBackWhite from 'src/assets/images/back_white.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export const Header = (props: PropsHeader) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleX, styles.space]}>{props.title}</Text>
        </View>
    );
};
export const BackHeaderX = (props: PropsBackHeader) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Icon width="25" height="24" />
            </TouchableOpacity>
            <Text style={[styles.titleX, styles.space]}>{props.title}</Text>
        </View>
    );
};
export const BackHeader = (props: PropsBackHeader) => {
    return (
        <View style={[styles.container, styles.withBack, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                {props.lightContent ? <IconBackWhite width="25" height="24" /> : <Icon width="25" height="24" />}
            </TouchableOpacity>
            <Text style={[styles.title]}>{props.title}</Text>
        </View>
    );
};
