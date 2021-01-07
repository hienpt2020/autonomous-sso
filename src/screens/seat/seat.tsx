import * as React from 'react'
import { FlatList, View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { ScrollView } from 'react-native-gesture-handler';
import BluetoothWhite from 'src/assets/images/bluetooth_white.svg'
import Bolt from 'src/assets/images/bolt.svg'
import BoltWhite from 'src/assets/images/bolt_white.svg'


const Seat = (props: Props) => {

    const NUM_COLUMNS = 2
    const FIXED_ITEM_HEIGHT = 40
    const presenter: Presenter = new PresenterImpl()
    const { t } = useTranslation()


    useEffect(() => {

    }, [])

    const renderItem = (data: string) => {
        return (<View style={styles.chipContainer}>
            <Text style={[styles.chipContent]}>{data}</Text>
            <Bolt width="24" height="24" style={styles.chipIcon} />
        </View>)
    }

    const renderMutableItem = (data: string) => {
        return (<View style={styles.chipMutableContainer}>
            <Text style={[styles.chipMutableContent]}>{data}</Text>
            <BoltWhite width="24" height="24" style={styles.chipIcon} />
            <BluetoothWhite width="16" height="16" style={styles.chipMutableIcon} />
        </View>)
    }

    const getItemLayout = (data: any, index: any) => {
        return ({
            length: FIXED_ITEM_HEIGHT,
            offset: 16,
            index
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.sliderContainer}>
                    <Image style={styles.coverImage} source={require('src/assets/images/image-hover-background.png')} />
                    <Text style={styles.sliderTitle}>(1/10)</Text>
                </View>
                <Text style={styles.title}>Seat#1</Text>
                <Text style={styles.subTitle}>139 Hong Ha, Phu Nhuan</Text>
                <Text style={styles.sectionTitle}>Assets</Text>
                <FlatList
                    data={["Smart Desk 4", "Frame POD 4", "ErgoChair 2", "Track Mell 2"]}
                    style={styles.list}
                    keyExtractor={(item, index) => `${item}${index}`}
                    numColumns={NUM_COLUMNS}
                    renderItem={({ item, index }) => {
                        let isMutable = index === 0
                        return isMutable ? renderMutableItem(item) : renderItem(item)
                    }}
                    getItemLayout={(data, index) => getItemLayout(data, index)}
                />
                <Text style={styles.sectionTitle}>Policies</Text>
                <Text style={styles.sectionContent}>
                    {`• Keep the desk clean \n• Do not make noise while working`}</Text>
            </ScrollView>
            <PrimaryButton containerStyle={styles.button} title={t('seat.book_seat')} />
        </SafeAreaView>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default Seat;
