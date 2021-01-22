import * as React from 'react';
import { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { Props } from './types';
import { AppText } from 'src/components';
import { AppColor } from '../../../styles';
import SvgIcRight from 'src/assets/images/ic_chevron_right.svg';
import { IcDown, IcUp } from '../../../assets/images/svg';
const CardItem = (props: Props) => {
    const cardData = props.cardData;

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <FastImage style={styles.coverImage} source={cardData.image} resizeMode="cover" />
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
                        onPress={() => {}}
                        Icon={(props: any) => <IcUp width={17.44} height={9.47} {...props} />}
                    />
                    <ControlButton
                        containerStyle={styles.upBtn}
                        onPress={() => {}}
                        Icon={(props: any) => <IcDown width={17.44} height={9.47} {...props} />}
                    />
                </View>
            </View>
            <View style={styles.timeContainer}>
                <AppText style={styles.timeText}>Jan 01 2020 | 10.00 AM</AppText>
                <SvgIcRight width={13} height={24} />
                <AppText style={styles.timeText}>Jan 01 2020 | 10.00 PM</AppText>
            </View>
        </TouchableOpacity>
    );
};

const ControlButton = (props: { onPress(): void; Icon: any; containerStyle?: StyleProp<object> }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const onPressOut = () => setIsPressed(false);
    const onPressIn = () => setIsPressed(true);

    return (
        <TouchableOpacity
            onPress={props.onPress}
            onPressOut={onPressOut}
            onPressIn={onPressIn}
            style={[
                styles.button,
                props.containerStyle,
                { backgroundColor: isPressed ? AppColor.DARK_GREY_1 : AppColor.WHITE },
            ]}
            activeOpacity={1}
        >
            {/*<Text>U</Text>*/}
            <props.Icon color={!isPressed ? AppColor.DARK_GREY_1 : AppColor.WHITE} />
        </TouchableOpacity>
    );
};

export default CardItem;
