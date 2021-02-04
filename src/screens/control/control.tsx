import * as React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { YellowBox, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/header';
import { Props } from './types';
import Height from './height';
import Device from '../../models/Device';
import { Controller } from '../../services/control-device/controller';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const Control = (props: Props) => {
    const { t } = useTranslation();
    const [percent, setPercent] = useState<number>(30);
    const device: Device = props.route.params.device;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Height percent={percent} />
            </View>
            <Text style={styles.heightText}>100.0</Text>
            <View style={styles.controlPanel}>
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={() => Controller.up(device.hubId, device.workingLayoutId)}
                    onPressOut={() => Controller.stop(device.hubId, device.workingLayoutId)}
                    activeOpacity={1}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={() => Controller.down(device.hubId, device.workingLayoutId)}
                    onPressOut={() => Controller.stop(device.hubId, device.workingLayoutId)}
                    activeOpacity={1}
                />
            </View>
            <SafeAreaView style={styles.header}>
                <BackHeader title={device.hubId} onPress={() => handleBack()} />
            </SafeAreaView>
        </SafeAreaView>
    );

    function handleBack() {
        props.navigation.goBack();
    }
};

export default Control;
