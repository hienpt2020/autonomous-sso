import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconBack from 'src/assets/images/arrow_left.svg';
import IconBackWhite from 'src/assets/images/ic_arrow_back_white.svg';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { AppText, AppView, Space } from '..';
import { styles } from './styles';
import { PropHeader, PropsBackHeader, PropsLargeHeader } from './types';

const ICON_SIZE = AppSpacing.ICON_SIZE;

const BUTTON_HITSLOP = {
    top: AppSpacing.MEDIUM,
    left: AppSpacing.MEDIUM,
    right: AppSpacing.MEDIUM,
    bottom: AppSpacing.MEDIUM,
};

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
        <SafeAreaView style={[styles.headerSafeView, props.style]}>
            <AppView style={styles.container} center>
                <AppText bold size={AppFontSize.SIZE_16}>
                    {props.title}
                </AppText>
            </AppView>
        </SafeAreaView>
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
                    <TouchableOpacity onPress={props.onPress} hitSlop={BUTTON_HITSLOP} activeOpacity={1}>
                        {props.lightContent ? (
                            <IconBackWhite width={`${ICON_SIZE}`} height={`${ICON_SIZE}`} />
                        ) : (
                            <IconBack width={`${ICON_SIZE}`} height={`${ICON_SIZE}`} />
                        )}
                    </TouchableOpacity>
                </AppView>

                <AppText bold size={AppFontSize.SIZE_16}>
                    {props.title}
                </AppText>

                <AppView style={styles.buttonContainer} />
            </AppView>
        </SafeAreaView>
    );
};
export const BackHeaderX = (props: PropsBackHeader) => {
    return (
        <>
            <BackHeader style={styles.headerSafeView} onPress={props.onPress} />
            <Space height={AppSpacing.LARGE} />
            <LargeHeader style={props.style} title={props.title} />
        </>
    );
};
