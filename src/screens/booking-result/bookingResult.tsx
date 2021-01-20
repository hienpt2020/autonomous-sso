import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import ImageSuccess from 'src/assets/images/image_success.svg';
import { PrimaryButton } from 'src/components/button';
import { BookingHistory } from 'src/models/BookingHistory';
import { RouteName } from 'src/routers/routeName';
import { styles } from './styles';
import { Props } from './types';

const BookingResult = (props: Props) => {
    const bookingHistory: BookingHistory | undefined = props.route.params.booking;

    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <ImageSuccess width="152" height="152" style={styles.title} />
            <Text style={styles.title}>Successful!</Text>
            <Text style={styles.subTitle}>
                You have booked the seat. Your unlock code below, use it to unlock your seat{' '}
            </Text>
            <Text style={styles.code}>{bookingHistory.code}</Text>
            <PrimaryButton wrapperContainer={styles.button} title={t('common.done')} onPress={() => handleDone()} />
        </View>
    );
    function handleDone() {
        props.navigation.navigate(RouteName.HOME);
    }
};

export default BookingResult;
