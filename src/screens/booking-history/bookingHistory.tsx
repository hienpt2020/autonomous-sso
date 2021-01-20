import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DEFAULT_REQUEST_LIMIT } from 'src/common/constant';
import { Empty } from 'src/components/empty';
import { BackHeader } from 'src/components/header';
import { Loading } from 'src/components/loading/loading';
import { BookingHistory } from 'src/models/BookingHistory';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
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
        try {
            setIsLoading(true);
            const bookingHistories = await getBookingHistory(isAdmin, workingSpaceId, currentPage);
            setBookings(currentPage == 0 ? bookingHistories : bookings.concat(bookingHistories));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
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
        return (
            <TouchableOpacity onPress={() => onItemSelected(data)}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.subTitle}>{data.address}</Text>
                    <Text style={styles.titleEnd}>{data.timeFrom + ' - ' + data.timeTo}</Text>
                    <Text style={styles.subTitleEnd}>{data.workspace}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BackHeader title={t('booking.title')} onPress={() => handleBack()} />

                {isLoading && page == 0 ? (
                    <Loading />
                ) : bookings.length > 0 ? (
                    <FlatList
                        refreshing={false}
                        onRefresh={_onRefresh}
                        onEndReachedThreshold={0}
                        onEndReached={_onLoadMore}
                        data={bookings}
                        style={{ paddingStart: 8, paddingEnd: 8 }}
                        keyExtractor={(item, index) => `${item.id}${index}`}
                        renderItem={({ item }) => renderItem(item)}
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
            </SafeAreaView>
        </View>
    );

    function onItemSelected(data: BookingHistory) {
        navigate(RouteName.PLACE_DETAIL, { booking: data });
    }
    function handleBack() {
        props.navigation.goBack();
    }
};

export default BookingScreen;
