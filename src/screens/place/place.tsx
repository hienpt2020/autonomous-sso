import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Text, View, YellowBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useCode } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppText, AppView, Divider, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { Chip } from 'src/components/chip';
import { Device } from 'src/components/device';
import { BackHeader } from 'src/components/header';
import { ImageSlider } from 'src/components/images/images';
import TimeSelect from 'src/components/timeSelect';
import Asset from 'src/models/Asset';
import Booking from 'src/models/Booking';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkLayout from 'src/models/WorkLayout';
import WorkPlace from 'src/models/WorkPlace';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppFontSize, AppSpacing } from 'src/styles';
import { bookPlace, getPlaceDetail } from './actions/placeAction';
import { styles } from './styles';
import { Props } from './types';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BookingDetail = (props: Props) => {
    const { t } = useTranslation();
    const imageHeight = 264;
    const bookingHistory: BookingHistory | undefined = props.route.params.booking;
    const place: WorkPlace | undefined = props.route.params.place;
    const booking: Booking = useSelector((state: RootState) => state.booking.booking);
    const from: Date = useSelector((state: RootState) => state.booking.booking.from);
    const to: Date = useSelector((state: RootState) => state.booking.booking.to);
    const workLayout: WorkLayout = useSelector((state: RootState) => state.booking.workLayout);
    const isAdmin: boolean = useSelector((state: RootState) => state.workspaceReducer.isAdmin);
    const [placeData, setPlaceData] = useState<WorkPlace | undefined>(undefined);

    useEffect(() => {
        if (bookingHistory) {
            _getData(bookingHistory.mapId, bookingHistory.placeId);
        }
        if (place) {
            const shortcutPlaceData = new WorkPlace();
            shortcutPlaceData.name = place.name;
            shortcutPlaceData.imageUrls = place.imageUrls;
            setPlaceData(shortcutPlaceData);
            _getData(place.mapId, place.id);
        }
    }, []);

    const _getData = async (mapId: number, placeId: number) => {
        try {
            setPlaceData(await getPlaceDetail(mapId, placeId));
        } catch (error) {}
    };

    const _onPressBookPlace = async () => {
        if (place) {
            const bookingHistory: BookingHistory = await bookPlace(place.id, booking.from, booking.to);
            if (bookingHistory) {
                navigate(RouteName.BOOKING_RESULT, { booking: bookingHistory });
            } else {
                navigate(RouteName.BOOKING_RESULT, { booking: undefined });
            }
        }
    };

    const _onPressDevice = (item: Asset) => {
        navigate(RouteName.CONFIGURATION_STEP1, null);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <BackHeader style={styles.header} lightContent title={''} onPress={() => handleBack()} />

            <ImageSlider data={placeData ? placeData.imageUrls : []} height={imageHeight} />

            <ScrollView>
                {placeData && (
                    <>
                        <AppView style={styles.infoContainer}>
                            <AppText bold size={AppFontSize.SIZE_28}>
                                {placeData.name}
                            </AppText>
                            <Space height={3} />
                            <AppText>{'Autonomous HCM'}</AppText>
                            <Space height={3} />
                            <AppText>{workLayout.address}</AppText>
                        </AppView>
                        {placeData.tags.length > 0 && (
                            <>
                                <Divider />
                                <Chip data={placeData.tags} />
                            </>
                        )}

                        <Space height={AppSpacing.SMALL} />
                    </>
                )}

                {bookingHistory && (
                    <>
                        <AppView style={styles.codeContainer}>
                            <Text style={[styles.codeTitle]}>{t('common.code')}</Text>

                            <AppView style={styles.codeLineContainer} horizontal alignItemsCenter>
                                <AppText style={styles.codeDesc}>{t('place.code_desc')}</AppText>
                                <Space width={AppSpacing.LARGE} />
                                <AppView style={styles.codeNumberContainer} center horizontal>
                                    <AppText style={styles.code}>{bookingHistory.code.toString()[0]}</AppText>
                                </AppView>
                                <Space width={4} />
                                <AppView style={styles.codeNumberContainer} center horizontal>
                                    <AppText style={styles.code}>{bookingHistory.code.toString()[1]}</AppText>
                                </AppView>
                                <Space width={4} />
                                <AppView style={styles.codeNumberContainer} center horizontal>
                                    <AppText style={styles.code}>{bookingHistory.code.toString()[2]}</AppText>
                                </AppView>
                            </AppView>
                        </AppView>
                        <Space height={AppSpacing.SMALL} />
                    </>
                )}

                {placeData && placeData.devices.length > 0 && (
                    <>
                        <Device
                            data={placeData.devices}
                            isConfig={isAdmin && !bookingHistory}
                            onPressDevice={_onPressDevice}
                        />
                        <Space height={AppSpacing.SMALL} />
                    </>
                )}

                <TimeSelect
                    title={t('place.time_title')}
                    from={bookingHistory ? bookingHistory.timeFrom : from}
                    to={bookingHistory ? bookingHistory.timeTo : to}
                    isSelect={false}
                />

                <Space height={AppSpacing.SMALL} />

                {workLayout && workLayout.policy ? (
                    <AppView style={styles.policyContainer}>
                        <AppText style={styles.sectionTitle}>{t('common.policies')}</AppText>
                        <AppText style={styles.sectionContent}>{workLayout.policy}</AppText>
                    </AppView>
                ) : null}

                <PrimaryButton
                    style={styles.button}
                    onPress={_onPressBookPlace}
                    title={t(bookingHistory ? 'booking_detail.cancel_booking' : 'place.book_place')}
                />
            </ScrollView>

            <SafeAreaView style={styles.header}>
                <BackHeader title={''} lightContent onPress={() => handleBack()} />
            </SafeAreaView>
        </View>
    );

    function handleBack() {
        props.navigation.goBack();
    }
};

export default BookingDetail;
