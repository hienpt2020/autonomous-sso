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
import { IState } from './types';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import { ImageSlider } from 'src/components/images/images';
import CardData from './CardData';
import BleManager from 'react-native-ble-manager';
import { navigate } from '../../routers/rootNavigation';
import { RouteName } from '../../routers/routeName';
import { connect } from 'react-redux';
import { createRequestEndAction, createRequestErrorMessageAction } from '../../redux/request';
import { BackHeader } from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConfigStep1Actions, IConfigStep1Actions } from './actions/configurationAction';
import { Parser } from '../../helpers/parser';
import i18next from 'i18next';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const IS_IOS = Platform.OS === 'ios';

class ConfigurationStep1 extends React.Component {
    servicesInfo: any;
    handlerDiscoverEmitter: any;
    handlerStopScanEmitter: any;
    handlerDisconnectEmitter: any;
    handlerBleNotificationEmitter: any;
    handlerConnectedPerEmitter: any;
    connectedPeripheralId: string = '';
    configAction: IConfigStep1Actions;

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
        this.configAction = new ConfigStep1Actions(props.dispatch);
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
        await this.configAction.getMqttInfo();
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
            if (__DEV__) {
                console.log('@Discover Peripheral:', peripheral);
            }
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
            this.setState({ peripherals });
        }
        console.log('@Disconnected from ' + data.peripheral);
    };

    flatListItemSeparator = () => {
        return <View style={styles.divider} />;
    };

    renderItem(data: any) {
        return (
            <CardData
                data={data}
                onPress={() => this.configAction.connectToPeripheral(data.id)}
                selectedId={data.connected}
            />
        );
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

    readBleNotification = async (res: any) => {
        try {
            const data = JSON.parse(Parser.parseBytesToString(res.value));
            console.log('@@@RESPONSE BLUETOOTH', data);
            switch (data.type) {
                case 'init':
                    if (data.status === '1') {
                        this.props.dispatch(createRequestEndAction());
                        navigate(RouteName.CONFIGURATION_RESULT, null);
                    } else if (data.status === '-1') {
                        this.props.dispatch(createRequestEndAction());
                        this.props.dispatch(createRequestErrorMessageAction(data.message));
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

    handleBack() {
        this.props.navigation.goBack();
    }

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
                <PrimaryButton
                    wrapperContainer={styles.button}
                    title={i18next.t(common.error)}
                    onPress={() => this.startScan()}
                />
                <SafeAreaView style={styles.header}>
                    <BackHeader title={''} lightContent onPress={this.handleBack} />
                </SafeAreaView>
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

export default connect(null, null)(ConfigurationStep1);
