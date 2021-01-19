import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconBackWhite from 'src/assets/images/ic_arrow_back_white.svg';
import IconBack from 'src/assets/images/ic_arrow_back.svg';
import { AppColor, AppFontSize } from 'src/styles';
import { AppText, AppView } from '..';
import { styles } from './styles';
import { PropHeader, PropsBackHeader, PropsLargeHeader } from './types';

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
        <SafeAreaView style={styles.headerSafeView}>
            <AppView style={styles.container} center>
                <AppText bold size={AppFontSize.SIZE_16}>
                    {props.title}
                </AppText>
            </AppView>
        </SafeAreaView>
    );
};

export const BackHeaderX = (props: PropsBackHeader) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <IconBack width="25" height="24" />
            </TouchableOpacity>
            <Text style={[styles.titleX, styles.space]}>{props.title}</Text>
        </View>
    );
};

export const BackHeader = (props: PropsBackHeader) => {
    return (
        <SafeAreaView
            style={[
                styles.safeView,
                props.style,
                { backgroundColor: props.lightContent ? 'transparent' : AppColor.WHITE },
            ]}
        >
            <AppView style={[styles.container, styles.withBack]} alignItemsCenter horizontal>
                <AppView style={styles.buttonContainer}>
                    <TouchableOpacity onPress={props.onPress}>
                        {props.lightContent ? (
                            <IconBackWhite width="14" height="14" />
                        ) : (
                            <IconBack width="14" height="14" />
                        )}
                    </TouchableOpacity>
                </AppView>

                <AppText bold size={AppFontSize.SIZE_16}>
                    {props.title}
                </AppText>

                <AppView style={styles.buttonContainer}></AppView>
            </AppView>
        </SafeAreaView>
    );
};
