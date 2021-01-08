import * as React from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { BookingData } from './types';


const Booking = (props: Props) => {

    const initialData: BookingData[] = []
    const presenter: Presenter = new PresenterImpl()

    const { t } = useTranslation()
    const [bookingData, setBookingData] = useState(initialData)

    useEffect(() => {
        setBookingData(presenter.fetchBooking())
    }, [])

    const renderItem = (data: BookingData) => {
        return (
            <TouchableOpacity onPress={() => onItemSelected(data)}><View style={styles.itemContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.subTitle}>{data.address}</Text>
                <Text style={styles.titleEnd}>{data.timeFrom}</Text>
                <Text style={styles.subTitleEnd}>{data.workspace}</Text>
            </View>
            </TouchableOpacity>)
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BackHeader title={t('booking.title')} onPress={() => handleBack()} />
                <FlatList
                    data={bookingData}
                    style={{ paddingStart: 8, paddingEnd: 8 }}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    renderItem={({ item }) => renderItem(item)}
                />
            </SafeAreaView>
        </View>
    )

    function onItemSelected(data: BookingData) {
        console.log(data)
    }
    function handleBack() {
        props.navigation.goBack()
    }
};

export default Booking;
