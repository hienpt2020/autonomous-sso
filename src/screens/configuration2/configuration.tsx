import * as React from 'react'
import { View, Text, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native'
import { ImageSlider } from 'src/components/images/images';
import { PrimaryInput } from 'src/components/input'

//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ConfigurationStep2 = (props: Props) => {

    const presenter: Presenter = new PresenterImpl()
    const { t } = useTranslation()
    const imageHeight = 221
    const [wifiName, setWifiName] = useState("")
    const [wifiNameError, setWifiNameError] = useState("")
    const [wifiPassword, setWifiPassword] = useState("")
    const [wifiPasswordError, setWifiPasswordError] = useState("")

    useEffect(() => {

    }, [])

    return (


        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <ImageSlider data={["https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"]}
                height={imageHeight} />
            <Text style={styles.title}>Seat#1</Text>
            <Text style={styles.subTitle}>Autonomous WorkSpace</Text>
            <Text style={styles.subTitle}>Floor #3</Text>
            <Text style={styles.subTitle}>Seat #1</Text>
            <Text style={styles.subTitle}>Device ID: smartdesk-abc-1</Text>
            <KeyboardAvoidingView behavior="position" style={{ flex: 1 }} >

                <View style={{ backgroundColor: 'white', flexGrow: 1 }}>
                    <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>Configuration</Text>

                    <PrimaryInput
                        placeholder={t('configuration.wifi')}
                        onChangeText={text => {
                            setWifiName(text)
                            setWifiNameError('')
                        }}
                        autoCapitalize="none"
                        errorMessage={wifiNameError} />
                    <PrimaryInput
                        placeholder={t('configuration.wifi_password')}
                        onChangeText={text => {
                            setWifiPassword(text)
                            setWifiPasswordError('')
                        }}
                        autoCapitalize="none"
                        errorMessage={wifiPasswordError} />
                </View>
            </KeyboardAvoidingView>

            <PrimaryButton wrapperContainer={styles.button} title={t('seat.book_seat')} />

        </View>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default ConfigurationStep2;
