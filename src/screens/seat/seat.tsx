import * as React from 'react'
import { View, Text, StatusBar } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { Chip } from 'src/components/chip';
import { ScrollView } from 'react-native-gesture-handler';
import { Device } from 'src/components/device';
import { YellowBox } from 'react-native'
import { ImageSlider } from 'src/components/images/images';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const Seat = (props: Props) => {

    const presenter: Presenter = new PresenterImpl()
    const { t } = useTranslation()
    const imageHeight = 221

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <ScrollView style={styles.container} >
                <ImageSlider data={["https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"]}
                    height={imageHeight} />
                <Text style={styles.title}>Seat#1</Text>
                <Text style={styles.subTitle}>139 Hong Ha, Phu Nhuan</Text>
                <Chip
                    data={["Near Window", "Near condition", "Near Window", "Near condition", "Near Window", "Near condition"]}
                    containerStyle={styles.chip} />
                <Text style={styles.sectionTitle}>Assets</Text>
                <Device
                    data={["Smart Desk 4", "Frame POD 4", "ErgoChair 2", "Track Mell 2"]}
                    containerStyle={styles.list}
                />
                <Text style={styles.sectionTitle}>Policies</Text>
                <Text style={styles.sectionContent}>
                    {`• Keep the desk clean \n• Do not make noise while working`}</Text>
            </ScrollView>
            <PrimaryButton wrapperContainer={styles.button} title={t('seat.book_seat')} />
        </View>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default Seat;
