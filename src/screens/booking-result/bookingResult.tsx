import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { AppText, AppView, Notice, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeader } from 'src/components/header';
import { BookingHistory } from 'src/models/BookingHistory';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const BookingResult = (props: Props) => {
    const bookingHistory: BookingHistory | undefined = props.route.params.booking;

    const { t } = useTranslation();

    function handleBack() {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BackHeader title={t('booking_results.title')} onPress={() => handleBack()} />

            <AppView style={styles.contentContainer} center>
                <Notice
                    title={bookingHistory ? t('booking_results.success') : t('booking_results.error')}
                    description={bookingHistory ? t('booking_results.desc') : t('booking_results.error_desc')}
                />

                <Space height={AppSpacing.LARGE} />

                {bookingHistory && (
                    <AppView horizontal>
                        <AppView center style={styles.codeContainer}>
                            <AppText style={styles.code}>{bookingHistory.code.toString()[0]}</AppText>
                        </AppView>
                        <Space width={AppSpacing.SMALL} />
                        <AppView center style={styles.codeContainer}>
                            <AppText style={styles.code}>{bookingHistory.code.toString()[1]}</AppText>
                        </AppView>
                        <Space width={AppSpacing.SMALL} />
                        <AppView center style={styles.codeContainer}>
                            <AppText style={styles.code}>{bookingHistory.code.toString()[2]}</AppText>
                        </AppView>
                    </AppView>
                )}

                {bookingHistory && (
                    <>
                        <Space height={AppSpacing.LARGE} />
                        <AppText style={styles.note}>{t('booking_results.note')}</AppText>
                    </>
                )}
            </AppView>

            <PrimaryButton
                style={styles.button}
                title={bookingHistory ? t('common.done') : t('booking_results.book_again')}
                onPress={() => handleDone()}
            />
        </View>
    );
    function handleDone() {
        props.navigation.navigate(RouteName.HOME);
    }
};

export default BookingResult;
