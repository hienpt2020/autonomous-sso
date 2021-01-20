import moment from 'moment';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import IconArrowUntil from 'src/assets/images/ic_arrow_until.svg';
import { BookingStatus, DEFAULT_REQUEST_LIMIT } from 'src/common/constant';
import { AppText, AppView, Divider, Space } from 'src/components';
import { Empty } from 'src/components/empty';
import { Loading } from 'src/components/loading/loading';
import { BookingHistory } from 'src/models/BookingHistory';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppColor, AppSpacing, AppStyle } from 'src/styles';
import { getBookingHistory } from './actions/bookingAction';
import { styles } from './styles';
import { Props } from './types';

const BookingScreen = (props: Props) => {
    const { t } = useTranslation();
    const [bookings, setBookings] = useState<BookingHistory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState(0);
    const [isLoadMore, setIsLoadMore] = useState(true);
    const [isAdmin, setisAdmin] = useState(false);
    const [workingSpaceId, setWorkingSpaceId] = useState(1);

    useEffect(() => {
        _getData(page);
    }, []);

    useEffect(() => {
        if (bookings.length % (DEFAULT_REQUEST_LIMIT * 2) != 0) {
            setIsLoadMore(false);
        }
    }, [bookings]);

    const _getData = async (currentPage: number) => {
        setIsLoading(true);
        let bookingHistories: BookingHistory[] = await getBookingHistory(isAdmin, workingSpaceId, currentPage);
        // TODO
        if (props.isUpComming) {
            const today = new Date();
            bookingHistories = bookingHistories.filter(
                // (booking) => booking.bookingStatus == BookingStatus.COMFIRMED,
                (booking) => moment(booking.timeFrom) > moment(),
            );
        }
        setBookings(currentPage == 0 ? bookingHistories : bookings.concat(bookingHistories));
        setIsLoading(false);
    };

    const _onRefresh = () => {
        setPage(0);
        _getData(0);
    };

    const _onLoadMore = () => {
        if (isLoadMore) {
            const nextPage = page + 1;
            _getData(nextPage);
            setPage(nextPage);
        }
    };

    const renderItem = (data: BookingHistory) => {
        let status = '';
        switch (data.bookingStatus) {
            case BookingStatus.CHECKED_IN:
                status = t('activities.checked_out');
                break;

            case BookingStatus.CANCEL:
                status = t('activities.cancel');
                break;

            default:
                status = '';
                break;
        }
        return (
            <TouchableOpacity onPress={() => onItemSelected(data)}>
                <View style={styles.itemContainer}>
                    <AppText style={styles.title}>{data.name}</AppText>
                    {status ? <AppText style={styles.status}>{status}</AppText> : null}
                    <Space height={12} />
                    <AppText style={styles.subTitleEnd}>{data.workspace}</AppText>
                    <Space height={8} />
                    <AppText style={styles.subTitle}>{data.address}</AppText>
                    <Space height={12} />
                    <AppView horizontal>
                        <AppView style={styles.dateContainer} center>
                            <AppText style={styles.titleEnd}>
                                {moment(data.timeFrom).format('MMM DD, YYYY | HH:ss A')}
                            </AppText>
                        </AppView>
                        <Space width={AppSpacing.SMALL} />
                        <IconArrowUntil width={13} height={24} />
                        <Space width={AppSpacing.SMALL} />
                        <AppView style={styles.dateContainer} center>
                            <AppText style={styles.titleEnd}>
                                {moment(data.timeTo).format('MMM DD, YYYY | HH:ss A')}
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
            {isLoading && page == 0 ? (
                <Loading />
            ) : bookings.length > 0 ? (
                <FlatList
                    contentContainerStyle={styles.list}
                    refreshing={false}
                    onRefresh={_onRefresh}
                    onEndReachedThreshold={0}
                    onEndReached={_onLoadMore}
                    data={bookings}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    renderItem={({ item }) => renderItem(item)}
                    ItemSeparatorComponent={() => <Divider style={styles.divider} />}
                    ListFooterComponent={() =>
                        isLoading ? (
                            <View style={{ height: 100 }}>
                                <Loading />
                            </View>
                        ) : (
                            <View></View>
                        )
                    }
                />
            ) : (
                <Empty />
            )}
        </View>
    );

    function onItemSelected(data: BookingHistory) {
        navigate(RouteName.PLACE_DETAIL, { booking: data });
    }
};

export default BookingScreen;
