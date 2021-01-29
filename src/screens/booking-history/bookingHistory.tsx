import moment from 'moment';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import IconArrowUntil from 'src/assets/images/ic_arrow_until.svg';
import { BookingStatus } from 'src/common/constant';
import { AppText, AppView, Divider, Space } from 'src/components';
import { Empty } from 'src/components/empty';
import { Loading } from 'src/components/loading/loading';
import { BookingHistory } from 'src/models/BookingHistory';
import { getBookingHistoryAction } from 'src/redux/booking-history/bookingHistoryAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const BookingScreen = (props: Props) => {
    const { t } = useTranslation();
    const [isLoadMore, setIsLoadMore] = useState(true);
    const [isAdmin, setisAdmin] = useState(false);
    const workingSpaceId = useSelector((state: RootState) => state.workspaceReducer.id);

    const { items, page, isLoading } = useSelector((state: RootState) =>
        props.isUpComming ? state.bookingHistoryReducer.upComingBookings : state.bookingHistoryReducer.bookings,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        _getData();
    }, []);

    // useEffect(() => {
    //     if (bookings.length % (DEFAULT_REQUEST_LIMIT * 2) != 0) {
    //         setIsLoadMore(false);
    //     }
    // }, [bookings]);

    const _getData = async () => {
        dispatch(
            getBookingHistoryAction(isAdmin, workingSpaceId, page, props.isUpComming || props.isUpComming != undefined),
        );
    };

    const _onRefresh = () => {
        _getData();
    };

    const _onLoadMore = () => {
        if (isLoadMore) {
            _getData();
        }
    };

    const renderItem = (data: BookingHistory) => {
        let status = '';
        let statusStyle = styles.status;
        switch (data.bookingStatus) {
            case BookingStatus.AVAILABLE || BookingStatus.CANCEL:
                status = t('activities.cancel');
                statusStyle = { ...statusStyle, ...styles.statusInActive };
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

        return (
            <TouchableOpacity onPress={() => onItemSelected(data)}>
                <View style={styles.itemContainer}>
                    <AppText style={styles.title}>{data.name}</AppText>
                    {status ? <AppText style={statusStyle}>{status}</AppText> : null}
                    <Space height={12} />
                    <AppText style={styles.subTitleEnd}>{data.workspace}</AppText>
                    <Space height={8} />
                    <AppText style={styles.subTitle}>{data.address}</AppText>
                    <Space height={12} />
                    <AppView horizontal>
                        <AppView style={styles.dateContainer} center>
                            <AppText style={styles.titleEnd}>
                                {moment(data.timeFrom).format('MMM DD, YYYY | HH:mm A')}
                            </AppText>
                        </AppView>
                        <Space width={AppSpacing.SMALL} />
                        <IconArrowUntil width={13} height={24} />
                        <Space width={AppSpacing.SMALL} />
                        <AppView style={styles.dateContainer} center>
                            <AppText style={styles.titleEnd}>
                                {moment(data.timeTo).format('MMM DD, YYYY | HH:mm A')}
                            </AppText>
                        </AppView>
                    </AppView>
                    <IconArrowRight style={styles.icArrow} width={24} height={24} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                refreshing={false}
                onRefresh={_onRefresh}
                // onEndReachedThreshold={0}
                // onEndReached={_onLoadMore}
                data={items}
                keyExtractor={(item, index) => `${item.id}${index}`}
                renderItem={({ item }) => renderItem(item)}
                ItemSeparatorComponent={() => (
                    <AppView style={styles.dividerContainer} horizontal>
                        <Divider style={styles.divider} />
                    </AppView>
                )}
                ListFooterComponent={() =>
                    isLoading ? (
                        <View style={{ height: 100 }}>
                            <Loading />
                        </View>
                    ) : items.length == 0 ? (
                        <Empty />
                    ) : (
                        <View></View>
                    )
                }
            />
        </View>
    );

    function onItemSelected(data: BookingHistory) {
        navigate(RouteName.PLACE_DETAIL, { booking: data });
    }
};

export default BookingScreen;
