import * as React from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    NativeModules,
    NativeEventEmitter,
    AppState,
    Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { ICardData, IState } from './types';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import { ImageSlider } from 'src/components/images/images';
// import { BleManager, EVENT_EMITTER_BLE } from 'src/services/bluetooth';
import CardData from './CardData';
import BleManager from 'react-native-ble-manager';
import { navigate } from '../../routers/rootNavigation';
import { RouteName } from '../../routers/routeName';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const IS_IOS = Platform.OS === 'ios';
const PORT_WRITE = IS_IOS ? 1 : 5;
const PORT_NOTIFY = IS_IOS ? 0 : 4;

class ConfigurationStep1 extends React.Component {
    servicesInfo: any;
    handlerDiscoverEmitter: any;
    handlerStopScanEmitter: any;
    handlerDisconnectEmitter: any;
    handlerBleNotificationEmitter: any;
    handlerConnectedPerEmitter: any;
    connectedPeripheralId: string = '';

    state: IState;
    constructor(props: any) {
        super(props);
        this.state = {
            scanning: false,
            peripherals: new Map(),
            appState: '',
            peripheral: '',
            selected: '',
        };
    }

    handleAppStateChange = (nextAppState: any) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
                console.log('Connected peripherals: ' + peripheralsArray.length);
            });
        }
        this.setState({ appState: nextAppState });
    };

    handleConnectedPeripheral = (data: any) => {
        let peripherals = this.state.peripherals;
        let peripheral = peripherals.get(data.peripheral);
        if (peripheral) {
            peripheral.connected = true;
            peripherals.set(peripheral.id, peripheral);
            this.setState({ peripherals });
        }
    };

    async componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        await BleManager.start({ showAlert: false });
        this.handlerDiscoverEmitter = bleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            this.handleDiscoverPeripheral,
        );
        this.handlerStopScanEmitter = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
        this.handlerDisconnectEmitter = bleManagerEmitter.addListener(
            'BleManagerDisconnectPeripheral',
            this.handleDisconnectedPeripheral,
        );
        this.handlerBleNotificationEmitter = bleManagerEmitter.addListener(
            'BleManagerDidUpdateValueForCharacteristic',
            this.readBleNotification,
        );
        this.handlerConnectedPerEmitter = bleManagerEmitter.addListener(
            'BleManagerConnectPeripheral',
            this.handleConnectedPeripheral,
        );
    }

    componentWillUnmount() {
        try {
            BleManager.disconnect(this.connectedPeripheralId);
        } catch (e) {}
        AppState.removeEventListener('change', this.handleAppStateChange);
        this.handlerDiscoverEmitter.remove();
        this.handlerStopScanEmitter.remove();
        this.handlerDisconnectEmitter.remove();
        this.handlerBleNotificationEmitter.remove();
        this.handlerConnectedPerEmitter.remove();
    }

    handleDiscoverPeripheral = (peripheral: any) => {
        let peripherals = this.state.peripherals;
        if (peripheral.name) {
            peripheral.connected = false;
            peripherals.set(peripheral.id, peripheral);
        }
        this.setState({ peripherals });
    };

    handleDisconnectedPeripheral = (data: any) => {
        let peripherals = this.state.peripherals;
        let peripheral = peripherals.get(data.peripheral);
        if (peripheral) {
            peripheral.connected = false;
            peripherals.set(peripheral.id, peripheral);
            this.connectedPeripheralId = '';
            // this.props.setLoading(false);
            this.setState({ peripherals });
        }
        console.log('@Disconnected from ' + data.peripheral);
    };

    flatListItemSeparator = () => {
        return <View style={styles.divider} />;
    };

    renderItem(data: any) {
        return <CardData data={data} onPress={() => this.connectToPeripheral(data.id)} selectedId={data.connected} />;
    }

    startScan = async () => {
        try {
            this.setState({ peripherals: new Map() });
            await BleManager.scan([], 10, false);
        } catch (e) {
            console.log('@start scan failed: ', e);
        }
    };

    handleStopScan = () => {
        console.log('@handleStopScan');
    };

    handleAfterConnectedSuccessfully = async (peripheralId: string) => {
        try {
            this.servicesInfo = await BleManager.retrieveServices(peripheralId);
            if (!IS_IOS) {
                await BleManager.requestMTU(peripheralId, 512);
            }
            await BleManager.startNotification(
                peripheralId,
                this.servicesInfo.characteristics[PORT_NOTIFY].service,
                this.servicesInfo.characteristics[PORT_NOTIFY].characteristic,
            );
            const data = stringToBytes(JSON.stringify({ type: 'get_device_id' }));
            await BleManager.write(
                peripheralId,
                this.servicesInfo.characteristics[PORT_WRITE].service,
                this.servicesInfo.characteristics[PORT_WRITE].characteristic,
                data,
                500,
            );
            navigate(RouteName.CONFIGURATION_STEP2, null);
        } catch (e) {
            console.log('Error - handleAfterConnectedSuccessfully:', e);
        }
    };

    connectToPeripheral = async (peripheralId: string) => {
        try {
            // If peripheralId hasn't connected yet
            if (this.connectedPeripheralId) {
                if (this.connectedPeripheralId === peripheralId) {
                    await BleManager.disconnect(peripheralId);
                    this.connectedPeripheralId = '';
                    // this.props.setLoading(false);
                } else {
                    try {
                        await BleManager.disconnect(this.connectedPeripheralId);
                    } catch {}
                    await BleManager.connect(peripheralId);
                    this.connectedPeripheralId = peripheralId;
                    await this.handleAfterConnectedSuccessfully(peripheralId);
                    // navigate(RouteName.CONFIGURATION_STEP2, null);
                }
            } else {
                // if peripheralId has connected
                await BleManager.connect(peripheralId);
                this.connectedPeripheralId = peripheralId;
                await this.handleAfterConnectedSuccessfully(peripheralId);
                // navigate(RouteName.CONFIGURATION_STEP2, null);
            }
        } catch (e) {
            console.log('Error connecting bluetooth', e);
        }
    };

    readBleNotification = async (res: any) => {
        try {
            const data = JSON.parse(bytesToString(res.value));
            console.log('@@@RESPONSE BLUETOOTH', data);
            if (data.status === '1') {
                this.handleTypeOfBleNotification(data);
            } else if (data.status === '-1') {
                // addDeviceFail({errorMessage: data.message, hasError: true  });
                // setLoading(false);
            }
        } catch (e) {
            console.log('Error....:', e);
        }
    };

    handleTypeOfBleNotification = (data: any) => {
        switch (data.type) {
            case 'init':
                console.log('@handleTypeOfBleNotification:', data);
                break;
            default:
                break;
        }
    };

    render() {
        const imageHeight = 221;
        const list = Array.from(this.state.peripherals.values());
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
                        ItemSeparatorComponent={this.flatListItemSeparator}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </ScrollView>
                <PrimaryButton wrapperContainer={styles.button} title={'Scan'} onPress={() => this.startScan()} />
            </View>
        );
    }
}

const bytesToString = function (bytes: any) {
    return bytes
        .map(function (x: any) {
            return String.fromCharCode(x);
        })
        .join('');
};

const stringToBytes = function (str: any) {
    return str.split('').map(function (x: any) {
        return x.charCodeAt(0);
    });
};

export default ConfigurationStep1;
