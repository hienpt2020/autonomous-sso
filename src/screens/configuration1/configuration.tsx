import * as React from 'react';
import { View, FlatList, ScrollView, NativeModules, NativeEventEmitter, AppState } from 'react-native';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import Card from './card';
import BleManager from 'react-native-ble-manager';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { useDispatch } from 'react-redux';
import { createRequestEndAction, createRequestErrorMessageAction } from '../../redux/request';
import { BackHeader } from 'src/components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Parser } from 'src/helpers/parser';
import { useEffect, useState } from 'react';
import { Bluetooth } from 'src/services/bluetooth/bluetooth';
import { useTranslation } from 'react-i18next';
import { Empty } from 'src/components/empty';
import { Props } from './types';
import WifiForm from './wifi-form';
import { DEVICE_TYPES } from 'src/common/constant';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const ConfigurationStep1 = (props: Props) => {
    const [appState, setAppState] = useState<any>('');
    const [list, setList] = useState<any[]>([]);
    const [isScanning, setIsScanning] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    let peripherals = new Map();
    let handlerDiscoverEmitter: any;
    let handlerStopScanEmitter: any;
    let handlerDisconnectEmitter: any;
    let handlerBleNotificationEmitter: any;
    let handlerConnectedPerEmitter: any;
    let connectedPeripheralId: string = '';
    const [isShowForm, setIsShowForm] = useState(false);
    const isPersonalDevice: boolean = Bluetooth.deviceType === DEVICE_TYPES.PERSONAL;
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
        await Bluetooth.getMqttInfo();

        Bluetooth.checkPermission();
    };

    const clearEvents = () => {
        try {
            BleManager.disconnect(connectedPeripheralId);
        } catch (e) {}
        AppState.removeEventListener('change', handleAppStateChange);
        handlerDiscoverEmitter && handlerDiscoverEmitter.remove();
        handlerStopScanEmitter && handlerStopScanEmitter.remove();
        handlerDisconnectEmitter && handlerDisconnectEmitter.remove();
        handlerBleNotificationEmitter && handlerBleNotificationEmitter.remove();
        handlerConnectedPerEmitter && handlerConnectedPerEmitter.remove();
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

    const flatListItemSeparator = () => (
        <View style={styles.spacingContainer}>
            <View style={styles.spacing} />
        </View>
    );

    const renderItem = (data: any) => {
        return <Card data={data} onPress={() => Bluetooth.connectToPeripheral(data.id, () => setIsShowForm(true))} />;
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
            setIsScanning(true);
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
        setIsScanning(false);
    };

    const readBleNotification = async (res: any) => {
        try {
            const data = JSON.parse(Parser.parseBytesToString(res.value));
            console.log('@@@RESPONSE BLUETOOTH', data);
            switch (data.type) {
                case 'init':
                    if (data.status === '1') {
                        dispatch(createRequestEndAction());
                        if (isPersonalDevice) {
                            navigate(RouteName.HOME_CONTROLL, null);
                        } else {
                            // is workspace
                            props.navigation.goBack();
                            props.navigation.goBack();
                            props.navigation.goBack();
                        }
                    } else if (data.status === '-1') {
                        dispatch(createRequestEndAction());
                        dispatch(createRequestErrorMessageAction(data.message));
                    }
                    break;
                case 'get_device_id':
                    // if (data.status === '1') {
                    //     // check device id has existed? server lam?
                    //     let hubId = await Bluetooth.generatePersonalDeviceCode();
                    //     // if has
                    //
                    //     let test = await Bluetooth.createPersonalDevice(hubId);
                    //     await Bluetooth.connectDeviceToServer(user.userId, hubId);
                    // } else {
                    //     dispatch(createRequestErrorMessageAction(data.message));
                    // }
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

    const handleBack = () => {
        props.navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <BackHeader title={'Setup'} onPress={handleBack} />
            {list.length > 0 ? (
                <ScrollView style={styles.container} nestedScrollEnabled={true}>
                    <FlatList
                        nestedScrollEnabled={true}
                        data={list}
                        style={[styles.list]}
                        keyExtractor={(item, index) => `${item}${index}`}
                        ItemSeparatorComponent={flatListItemSeparator}
                        renderItem={({ item }) => renderItem(item)}
                    />
                </ScrollView>
            ) : (
                <Empty />
            )}
            <PrimaryButton style={styles.button} loading={isScanning} onPress={startScan} title={t('Scan')} />

            {/*{isShowForm && <WifiForm onCancel={() => setIsShowForm(false)} />}*/}
        </View>
    );
};

export default ConfigurationStep1;
