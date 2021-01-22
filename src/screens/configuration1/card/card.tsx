import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { styles } from './styles';
import SvgICBleDisconnected from 'src/assets/images/ic_bluetooth_disconnected.svg';
import SvgICBleConnected from 'src/assets/images/ic_bluetooth_connected.svg';
import SvgICBleSignal0 from 'src/assets/images/ic_signal_ble_0.svg';
import SvgICBleSignal3 from 'src/assets/images/ic_signal_ble_3.svg';
import { AppText } from 'src/components';

const Card = (props: { data: any; onPress(): void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} activeOpacity={0.8}>
            <View style={styles.left}>
                <View style={styles.bleIcon}>
                    {props.data.connected ? <SvgICBleConnected /> : <SvgICBleDisconnected />}
                </View>
            </View>
            <View style={styles.center}>
                <AppText style={[styles.name]}>{props.data.name}</AppText>
                {props.data.connected ? <SvgICBleSignal3 /> : <SvgICBleSignal0 />}
            </View>
            <View style={styles.right}>
                {props.data.connected ? (
                    <View style={styles.textContainer}>
                        <AppText style={styles.connectText}>Connected</AppText>
                    </View>
                ) : null}
            </View>
        </TouchableOpacity>
    );
};

export default Card;
