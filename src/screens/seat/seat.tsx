import * as React from 'react'
import { View, Image, Text, StatusBar } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { Chip } from 'src/components/chip';
import { ScrollView } from 'react-native-gesture-handler';
import { Device } from 'src/components/device';
import { YellowBox } from 'react-native'
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const Seat = (props: Props) => {

    const presenter: Presenter = new PresenterImpl()
    const { t } = useTranslation()


    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />

            <ScrollView style={styles.container} >
                <View style={styles.sliderContainer}>
                    <Image style={styles.coverImage} source={require('src/assets/images/image-hover-background.png')} />
                    <Text style={styles.sliderTitle}>(1/10)</Text>
                </View>
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
