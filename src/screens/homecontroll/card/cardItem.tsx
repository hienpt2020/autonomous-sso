import * as React from 'react';
import { useState } from 'react';
import { StyleProp, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { Props } from './types';
import { AppText } from 'src/components';
import { AppColor } from 'src/styles';
import SvgIcRight from 'src/assets/images/ic_chevron_right.svg';
import { IcDown, IcUp, IcStand, IcSit } from 'src/assets/images/svg';
import { Controller } from 'src/services/control-device/controller';
import moment from 'moment';
import { getImage } from 'src/helpers/imageHelper';
import { DEFAULT_IMAGES } from 'src/common/constant';
import { showPopupWarning } from '../actions/showPopup';
const CardItem = (props: Props) => {
    const cardData = props.cardData;

    return (
        <TouchableOpacity
            style={styles.container}
            // onPress={props.onPress}
            activeOpacity={1}
            onLongPress={() => showPopupWarning(() => Controller.removeDevice(cardData.hubId))}
        >
            <FastImage
                style={styles.coverImage}
                source={getImage(cardData.image, DEFAULT_IMAGES.DEVICE)}
                resizeMode="cover"
            />
            <View style={[styles.content, !!cardData.fromTime && { marginBottom: 4 }]}>
                <View style={{ flex: 1 }}>
                    <AppText style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
                        Smart Desk 4
                    </AppText>
                </View>
                <View style={styles.descriptionContainer}>
                    <AppText style={styles.descriptionText} numberOfLines={1} ellipsizeMode="tail">
                        {`ID: ${cardData.hubId}`}
                    </AppText>
                </View>
            </View>
            {cardData.fromTime && (
                <View style={styles.timeContainer}>
                    <AppText size={11} style={styles.timeText}>
                        {moment(cardData.fromTime).format('MMM DD YYYY | HH:mm')}
                    </AppText>
                    <SvgIcRight width={13} height={24} />
                    <AppText size={11} style={styles.timeText}>
                        {moment(cardData.toTime).format('MMM DD YYYY | HH:mm')}
                    </AppText>
                </View>
            )}
            <View style={styles.panel}>
                <ControlButton
                    Icon={(props: object) => <IcUp width={17.44} height={9.47} {...props} />}
                    onPressIn={() => Controller.up(cardData.hubId, cardData.layoutId)}
                    onPressOut={() => Controller.stop(cardData.hubId, cardData.layoutId)}
                />
                <ControlButton
                    Icon={(props: object) => <IcDown width={17.44} height={9.47} {...props} />}
                    onPressIn={() => Controller.down(cardData.hubId, cardData.layoutId)}
                    onPressOut={() => Controller.stop(cardData.hubId, cardData.layoutId)}
                />
                <ControlButton
                    Icon={(props: object) => <IcStand {...props} />}
                    onPressIn={() => Controller.stand(cardData.hubId, cardData.layoutId)}
                    onPressOut={() => {}}
                />
                <ControlButton
                    Icon={(props: object) => <IcSit {...props} />}
                    onPressIn={() => Controller.sit(cardData.hubId, cardData.layoutId)}
                    onPressOut={() => {}}
                />
            </View>
        </TouchableOpacity>
    );
};

const ControlButton = (props: {
    onPressIn(): void;
    onPressOut(): void;
    Icon: any;
    containerStyle?: StyleProp<object>;
}) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const _onPressOut = () => {
        setIsPressed(false);
        props.onPressOut();
    };
    const _onPressIn = () => {
        setIsPressed(true);
        props.onPressIn();
    };

    return (
        <TouchableOpacity
            onPressOut={_onPressOut}
            onPressIn={_onPressIn}
            style={[
                styles.button,
                props.containerStyle,
                { backgroundColor: isPressed ? AppColor.DARK_GREY_1 : AppColor.WHITE },
            ]}
            activeOpacity={1}
        >
            <props.Icon color={!isPressed ? AppColor.DARK_GREY_1 : AppColor.WHITE} />
        </TouchableOpacity>
    );
};

export default CardItem;
