import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { styles } from './styles';
import SvgICBleDisconnected from 'src/assets/images/ic_bluetooth_disconnected.svg';
import SvgICBleConnected from 'src/assets/images/ic_bluetooth_connected.svg';
import { AppText } from 'src/components';
import { IcSignal } from 'src/assets/images/svg';

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
                <WaveSignal rssi={props.data.rssi} />
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

const WaveSignal = ({ rssi }: { rssi: number }) => {
    if (rssi > -100 && rssi < -80) {
        return <IcSignal isActiveSignal1 />;
    }
    if (rssi > -80 && rssi < -70) {
        return <IcSignal isActiveSignal1 isActiveSignal2 />;
    }
    if (rssi > -70) {
        return <IcSignal isActiveSignal1 isActiveSignal2 isActiveSignal3 />;
    }
    return <IcSignal />;
};

export default Card;
