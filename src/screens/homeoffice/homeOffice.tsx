import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IcEmpty from 'src/assets/images/ic_empty_booking.svg';
import { AppView, Space } from 'src/components';
import { Empty } from 'src/components/empty';
import { Header, LargeHeader } from 'src/components/header';
import { Loading } from 'src/components/loading';
import { Log } from 'src/helpers/logger';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkLayout from 'src/models/WorkLayout';
import { getBookingHistoryAction } from 'src/redux/booking-history/bookingHistoryAction';
import { setWorkLayoutAction } from 'src/redux/booking/bookingAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { getWorkLayout } from './actions/homeAction';
import { CardItem } from './card';
import FloatingButton from './floatingButton';
import ListUpcoming from './list-upcoming/listUpcoming';
import { styles } from './styles';
import { Props } from './types';

const Office = (props: Props) => {
    const { t } = useTranslation();
    const [workLayouts, setWorkLayouts] = useState<WorkLayout[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const workingSpaceId = useSelector((state: RootState) => state.workspaceReducer.id);
    const inComingBookings: BookingHistory[] = useSelector(
        (state: RootState) => state.bookingHistoryReducer.upComingBookings.items,
    );

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            _getListWorkLayout(false, workingSpaceId);
            dispatch(getBookingHistoryAction(false, workingSpaceId, 0, true));
        });

        return unsubscribe;
    }, [props.navigation, workingSpaceId]);

    useEffect(() => {
        _getListWorkLayout(true, workingSpaceId);
        dispatch(getBookingHistoryAction(false, workingSpaceId, 0, true));
    }, [workingSpaceId]);

    const _getListWorkLayout = (isSetLoading: boolean, workingSpaceId: number) => {
        if (workingSpaceId >= 0) {
            if (isSetLoading) {
                setIsLoading(true);
            }
            Log.debug('dddd' + workingSpaceId);
            getWorkLayout(workingSpaceId)
                .then((data) => {
                    setWorkLayouts(data);
                })
                .catch(() => {})
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const renderItem = (data: WorkLayout) => {
        return <CardItem cardData={data} onPress={() => _onItemSelected(data)} />;
    };

    const _onPressMyBooking = () => {
        navigate(RouteName.BOOKING_HISTORY, null);
    };

    const _renderFloatingButton = () => {
        return <FloatingButton onPress={_onPressMyBooking} />;
    };

    const _onItemSelected = (data: WorkLayout) => {
        dispatch(setWorkLayoutAction(data));
        props.navigation.navigate(RouteName.MAP, { map: data });
    };
    return (
        <View style={styles.container}>
            <Header title={'Booking'} />

            <FlatList
                contentContainerStyle={styles.list}
                data={workLayouts}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.id + ''}
                ItemSeparatorComponent={() => <Space height={AppSpacing.LARGE} />}
                ListEmptyComponent={() => {
                    return isLoading ? (
                        <View></View>
                    ) : (
                        <Empty
                            icon={<IcEmpty />}
                            iconHeight={145}
                            iconWidth={228}
                            title={t('home.empty_title')}
                            description={t('home.empty_desc')}
                        />
                    );
                }}
                ListFooterComponent={() =>
                    isLoading ? (
                        <View style={{ flex: 1 }}>
                            <Loading />
                        </View>
                    ) : (
                        <View></View>
                    )
                }
                ListHeaderComponent={() => (
                    <AppView>
                        <Space height={AppSpacing.LARGE} />

                        {inComingBookings.length > 0 && (
                            <>
                                <ListUpcoming data={inComingBookings} />
                            </>
                        )}

                        {workLayouts.length > 0 && (
                            <LargeHeader style={styles.header} title={t('home.title')} subTitle={t('home.sub_title')} />
                        )}

                        <Space height={AppSpacing.LARGE} />
                    </AppView>
                )}
            />
        </View>
    );
};

export default Office;
