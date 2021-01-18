import * as React from 'react';
import { Text, View } from 'react-native';
import { PropsLargeHeader, PropsBackHeader, PropHeader } from './types';
import Icon from 'src/assets/images/back.svg';
import IconBackWhite from 'src/assets/images/back_white.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { AppText, AppView } from '..';
import { AppFontSize } from 'src/styles';

export const LargeHeader = (props: PropsLargeHeader) => {
    return (
        <View style={props.style}>
            <AppText style={[styles.titleX]} size={AppFontSize.SIZE_28}>
                {props.title}
            </AppText>

            <AppText style={[styles.subTitle]} size={AppFontSize.SIZE_28}>
                {props.subTitle}
            </AppText>
        </View>
    );
};

export const Header = (props: PropHeader) => {
    return (
        <AppView style={styles.container} center>
            <AppText bold size={AppFontSize.SIZE_16}>
                {props.title}
            </AppText>
        </AppView>
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
