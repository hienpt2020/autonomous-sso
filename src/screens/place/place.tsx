import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Text, View, YellowBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { BookingStatus, DEVICE_TYPES, ROLES } from 'src/common/constant';
import { AppText, AppView, Divider, showPopup, Space } from 'src/components';
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
import { getBookingHistoryAction } from 'src/redux/booking-history/bookingHistoryAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppFontSize, AppSpacing } from 'src/styles';
import { bookPlace, cancelBooking, getPlaceDetail } from './actions/placeAction';
import { styles } from './styles';
import { Props } from './types';
import Bluetooth from 'src/services/bluetooth';
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
    const isAdmin: boolean = useSelector(
        (state: RootState) =>
            state.workspaceReducer.roleByCurrentUser == ROLES.OWNER ||
            state.workspaceReducer.roleByCurrentUser == ROLES.ADMIN,
    );
    const [placeData, setPlaceData] = useState<WorkPlace | undefined>(undefined);
    const workingSpaceId = useSelector((state: RootState) => state.workspaceReducer.id);
    const canBooking = useSelector((state: RootState) => state.booking.enable);
    const dispatch = useDispatch();

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
        setPlaceData(await getPlaceDetail(mapId, placeId));
    };

    const _onPressBookPlace = async () => {
        if (place) {
            const bookingHistory: BookingHistory = await bookPlace(place.id, booking.from, booking.to);
            if (bookingHistory) {
                // TODO
                dispatch(getBookingHistoryAction(false, workingSpaceId, 0, true));
                navigate(RouteName.BOOKING_RESULT, { booking: bookingHistory });
            } else {
                navigate(RouteName.BOOKING_RESULT, { booking: undefined });
            }
        }
    };

    const _onPressCancelBooking = async () => {
        if (bookingHistory) {
            showPopup(t('booking_detail.cancel_title'), t('booking_detail.cancel_desc'), null, [
                {
                    title: t('common.yes'),
                    onPress: async () => {
                        const cancelResult = await cancelBooking(bookingHistory.id);
                        if (cancelResult) {
                            // TODO
                            dispatch(getBookingHistoryAction(false, workingSpaceId, 0, true));
                            showPopup(t('booking_detail.cancelled'), t('booking_detail.cancelled_desc'), null, [
                                {
                                    title: t('common.ok'),
                                    onPress: () => {
                                        handleBack();
                                    },
                                },
                            ]);
                        }
                    },
                },
                {
                    title: t('common.no'),
                    style: 'negative',
                    onPress: () => {},
                },
            ]);
        }
    };

    const _onPressDevice = (item: Asset) => {
        navigate(RouteName.CONFIGURATION_INTRO1, null);
        Bluetooth.deviceType = DEVICE_TYPES.WORKSPACE;
    };

    const _renderBookingStatus = () => {
        let status = '';
        if (bookingHistory) {
            switch (bookingHistory.bookingStatus) {
                case BookingStatus.AVAILABLE || BookingStatus.CANCEL:
                    status = t('activities.cancel');
                    break;

                case BookingStatus.BOOKED || BookingStatus.COMFIRMED:
                    status = t('activities.upcoming');
                    break;

                case BookingStatus.CHECKED_IN:
                    status = t('activities.checked_in');
                    break;

                default:
                    status = t('activities.upcoming');
                    break;
            }
        }

        return status ? (
            <>
                <Space width={AppSpacing.SMALL} />
                <AppView style={styles.bookingStatusContainer} center>
                    <AppText style={styles.bookingStatus}>{status}</AppText>
                </AppView>
            </>
        ) : null;
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <ImageSlider data={placeData ? placeData.imageUrls : []} height={imageHeight} />

            <ScrollView>
                {placeData && (
                    <>
                        <AppView style={styles.infoContainer}>
                            <AppView horizontal alignItemsCenter spaceBetween>
                                <AppText style={styles.placeName} bold size={AppFontSize.SIZE_28}>
                                    {placeData.name}
                                </AppText>

                                {_renderBookingStatus()}
                            </AppView>

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
                    disabled={!canBooking && !bookingHistory}
                    style={styles.button}
                    onPress={
                        !bookingHistory
                            ? _onPressBookPlace
                            : bookingHistory.bookingStatus == BookingStatus.COMFIRMED
                            ? _onPressCancelBooking
                            : handleBack
                    }
                    title={t(
                        !bookingHistory
                            ? 'place.book_place'
                            : bookingHistory.bookingStatus == BookingStatus.COMFIRMED
                            ? 'booking_detail.cancel_booking'
                            : 'booking_detail.go_back',
                    )}
                />
            </ScrollView>

            <BackHeader style={styles.header} title={''} lightContent onPress={() => handleBack()} />
        </View>
    );

    function handleBack() {
        props.navigation.goBack();
    }
};

export default BookingDetail;
