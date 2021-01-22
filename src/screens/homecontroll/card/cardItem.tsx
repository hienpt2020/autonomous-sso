import * as React from 'react';
import { useState } from 'react';
import { StyleProp, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { Props } from './types';
import { AppText } from 'src/components';
import { AppColor } from 'src/styles';
import SvgIcRight from 'src/assets/images/ic_chevron_right.svg';
import { IcDown, IcUp } from 'src/assets/images/svg';
import { Controller } from 'src/services/control-device/controller';
import moment from 'moment';
import { getImage } from 'src/helpers/imageHelper';
import { DEFAULT_IMAGES } from 'src/common/constant';
const CardItem = (props: Props) => {
    const cardData = props.cardData;

    return (
        <TouchableOpacity disabled={true} style={styles.container} onPress={props.onPress}>
            <FastImage
                style={styles.coverImage}
                source={getImage(cardData.image, DEFAULT_IMAGES.DEVICE)}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <AppText style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
                        Smart Desk 4
                    </AppText>
                    <AppText style={styles.descriptionText} numberOfLines={1} ellipsizeMode="tail">
                        {`DeviceId: ${cardData.hubId}`}
                    </AppText>
                </View>
                <View style={styles.panel}>
                    <ControlButton
                        containerStyle={styles.downBtn}
                        Icon={(props: object) => <IcUp width={17.44} height={9.47} {...props} />}
                        onPressIn={() => Controller.up(cardData.hubId, cardData.layoutId)}
                        onPressOut={() => Controller.stop(cardData.hubId, cardData.layoutId)}
                    />
                    <ControlButton
                        containerStyle={styles.upBtn}
                        Icon={(props: object) => <IcDown width={17.44} height={9.47} {...props} />}
                        onPressIn={() => Controller.down(cardData.hubId, cardData.layoutId)}
                        onPressOut={() => Controller.stop(cardData.hubId, cardData.layoutId)}
                    />
                </View>
            </View>
            <View style={styles.timeContainer}>
                <AppText style={styles.timeText}>{moment(cardData.fromTime).format('MMM DD YYYY | HH:mm')}</AppText>
                <SvgIcRight width={13} height={24} />
                <AppText style={styles.timeText}>{moment(cardData.toTime).format('MMM DD YYYY | HH:mm')}</AppText>
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
        props.onPressIn();
        setIsPressed(true);
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
