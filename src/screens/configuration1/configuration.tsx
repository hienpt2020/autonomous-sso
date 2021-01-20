import * as React from 'react';
import { View, Text, StatusBar, FlatList, ScrollView, NativeModules, NativeEventEmitter, AppState } from 'react-native';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import { ImageSlider } from 'src/components/images/images';
import CardData from './CardData';
import BleManager from 'react-native-ble-manager';
import { navigate } from '../../routers/rootNavigation';
import { RouteName } from '../../routers/routeName';
import { useDispatch } from 'react-redux';
import { createRequestEndAction, createRequestErrorMessageAction } from '../../redux/request';
import { BackHeader } from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConfigStep1Actions, IConfigStep1Actions } from './actions/configurationAction';
import { Parser } from '../../helpers/parser';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const ConfigurationStep1 = (props: any) => {
    const [appState, setAppState] = useState<any>('');
    const [list, setList] = useState<any[]>([]);
    const imageHeight = 221;
    const dispatch = useDispatch();
    const configAction: IConfigStep1Actions = new ConfigStep1Actions(dispatch);
    let peripherals = new Map();
    let handlerDiscoverEmitter: any;
    let handlerStopScanEmitter: any;
    let handlerDisconnectEmitter: any;
    let handlerBleNotificationEmitter: any;
    let handlerConnectedPerEmitter: any;
    let connectedPeripheralId: string = '';

    useEffect(() => {
        init();
        return () => {
            clearEvents();
        };
    }, []);

    const init = async () => {
        AppState.addEventListener('change', handleAppStateChange);
        await BleManager.start({ showAlert: false });
        handlerDiscoverEmitter = bleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            handleDiscoverPeripheral,
        );
        handlerStopScanEmitter = bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
        handlerDisconnectEmitter = bleManagerEmitter.addListener(
            'BleManagerDisconnectPeripheral',
            handleDisconnectedPeripheral,
        );
        handlerBleNotificationEmitter = bleManagerEmitter.addListener(
            'BleManagerDidUpdateValueForCharacteristic',
            readBleNotification,
        );
        handlerConnectedPerEmitter = bleManagerEmitter.addListener(
            'BleManagerConnectPeripheral',
            handleConnectedPeripheral,
        );
        await configAction.getMqttInfo();
        configAction.checkPermission();
    };

    const clearEvents = () => {
        try {
            BleManager.disconnect(connectedPeripheralId);
        } catch (e) {}
        AppState.removeEventListener('change', handleAppStateChange);
        handlerDiscoverEmitter.remove();
        handlerStopScanEmitter.remove();
        handlerDisconnectEmitter.remove();
        handlerBleNotificationEmitter.remove();
        handlerConnectedPerEmitter.remove();
    };

    const handleAppStateChange = (nextAppState: any) => {
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
            BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
                console.log('Connected peripherals: ' + peripheralsArray.length);
            });
        }
        setAppState(nextAppState);
    };

    const handleConnectedPeripheral = (data: any) => {
        let peripheral = peripherals.get(data.peripheral);
        if (peripheral) {
            peripheral.connected = true;
            peripherals.set(peripheral.id, peripheral);
        }
    };

    const flatListItemSeparator = () => {
        return <View style={styles.divider} />;
    };

    const renderItem = (data: any) => {
        return (
            <CardData
                data={data}
                onPress={() => configAction.connectToPeripheral(data.id)}
                selectedId={data.connected}
            />
        );
    };

    const handleDisconnectedPeripheral = (data: any) => {
        let peripheral = peripherals.get(data.peripheral);
        if (peripheral) {
            peripheral.connected = false;
            peripherals.set(peripheral.id, peripheral);
            connectedPeripheralId = '';
            setList(Array.from(peripherals.values()));
            console.log('@Disconnected from ' + data.peripheral);
        }
    };

    const startScan = async () => {
        try {
            peripherals = new Map();
            setList([]);
            await BleManager.scan([], 10, false);
        } catch (e) {
            console.log('@start scan failed: ', e);
        }
    };
    const handleDiscoverPeripheral = (peripheral: any) => {
        if (peripheral.name) {
            if (__DEV__) {
                console.log('@Discover Peripheral:', peripheral);
            }
            peripheral.connected = false;
            peripherals.set(peripheral.id, peripheral);
            setList(Array.from(peripherals.values()));
        }
    };

    const handleStopScan = () => {
        console.log('@handleStopScan');
    };

    const readBleNotification = async (res: any) => {
        try {
            const data = JSON.parse(Parser.parseBytesToString(res.value));
            console.log('@@@RESPONSE BLUETOOTH', data);
            switch (data.type) {
                case 'init':
                    if (data.status === '1') {
                        dispatch(createRequestEndAction());
                        navigate(RouteName.CONFIGURATION_RESULT, null);
                    } else if (data.status === '-1') {
                        dispatch(createRequestEndAction());
                        dispatch(createRequestErrorMessageAction(data.message));
                    }
                    break;
                default:
                    break;
            }
        } catch (e) {
            if (__DEV__) {
                console.log('Error....:', e);
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                <ImageSlider
                    data={[
                        'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
                        'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
                        'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
                        'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
                        'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
                    ]}
                    height={imageHeight}
                />
                <Text style={styles.title}>Seat#1</Text>
                <Text style={styles.subTitle}>Autonomous WorkSpace</Text>
                <Text style={styles.subTitle}>Floor #3</Text>
                <Text style={styles.subTitle}>Seat #1</Text>
                <Text style={styles.sectionTitle}>Available assets</Text>
                <FlatList
                    nestedScrollEnabled={true}
                    data={list}
                    style={[styles.list]}
                    keyExtractor={(item, index) => `${item}${index}`}
                    ItemSeparatorComponent={flatListItemSeparator}
                    renderItem={({ item }) => renderItem(item)}
                />
            </ScrollView>
            <PrimaryButton wrapperContainer={styles.button} title={i18next.t('Scan')} onPress={() => startScan()} />
            <SafeAreaView style={styles.header}>
                <BackHeader title={''} lightContent onPress={handleBack} />
            </SafeAreaView>
        </View>
    );

    function handleBack() {
        navigate(RouteName.PLACE_DETAIL, null);
    }
};

export default ConfigurationStep1;
