import * as React from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { PrimaryInput } from 'src/components/input';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Booking from 'src/models/Booking';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import WorkLayout from 'src/models/WorkLayout';
import { PrimaryButton } from 'src/components/button';
import { Bluetooth } from 'src/services/bluetooth/bluetooth';
import { AppText } from 'src/components';
import { Props } from './types';
import { AppColor } from 'src/styles';

const WifiForm = ({ onCancel }: Props) => {
    const { t } = useTranslation();
    const [wifiName, setWifiName] = useState('');
    const [wifiNameError, setWifiNameError] = useState('');
    const [wifiPassword, setWifiPassword] = useState('');
    const [wifiPasswordError, setWifiPasswordError] = useState('');
    const booking: Booking = useSelector((state: RootState) => state.booking.booking);
    const workLayout: WorkLayout = useSelector((state: RootState) => state.booking.workLayout);

    useEffect(() => {}, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => Keyboard.dismiss()}
                activeOpacity={1}
                style={{ backgroundColor: 'white', width: '100%', paddingHorizontal: 16 }}
            >
                <AppText style={[styles.sectionTitle]}>Connect SmartDesk 4 to wifi</AppText>

                <PrimaryInput
                    placeholder={t('setup.wifi')}
                    onChangeText={(text) => {
                        setWifiName(text);
                        setWifiNameError('');
                    }}
                    autoCapitalize="none"
                    errorMessage={wifiNameError}
                    style={{ marginVertical: 16 }}
                />
                <PrimaryInput
                    placeholder={t('setup.wifi_password')}
                    onChangeText={(text) => {
                        setWifiPassword(text);
                        setWifiPasswordError('');
                    }}
                    autoCapitalize="none"
                    errorMessage={wifiPasswordError}
                    secureTextEntry={true}
                />
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        titleStyle={styles.textStyle}
                        containerStyle={[styles.btnContainerStyle, styles.connectBtn]}
                        title={t('setup.btn_connect_device')}
                        onPress={() => Bluetooth.bookingDevice(wifiName, wifiPassword, workLayout.id, booking.code)}
                        disabled={!wifiName && !wifiPassword}
                    />
                    <PrimaryButton
                        titleStyle={[styles.textStyle, { color: AppColor.DARK_GREY_1 }]}
                        buttonStyle={[styles.cancelButtonStyle]}
                        containerStyle={[styles.btnContainerStyle, styles.cancelBtn]}
                        type="outline"
                        title={t('setup.btn_cancel_device')}
                        onPress={onCancel}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default WifiForm;
