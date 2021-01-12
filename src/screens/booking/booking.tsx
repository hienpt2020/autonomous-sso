import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_REQUEST_LIMIT } from 'src/common/constant';
import { Empty } from 'src/components/empty';
import { BackHeader } from 'src/components/header';
import { Loading } from 'src/components/loading/loading';
import { BookingData } from 'src/models/booking/bookingData';
import { getBookingHistoryAction } from 'src/redux/booking/bookingHistory/getBookingHistoryAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { styles } from './styles';
import { Props } from './types';

const Booking = (props: Props) => {
  const { t } = useTranslation();
  const bookings: BookingData[] = useSelector((state: RootState) => state.getBookingHistoryReducer.bookings);
  const isLoading: boolean = useSelector((state: RootState) => state.getBookingHistoryReducer.isLoading);
  const [page, setPage] = useState(0);
  const [isAdmin, setisAdmin] = useState(false);
  const [workingSpaceId, setWorkingSpaceId] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingHistoryAction({ isAdmin, page, workingSpaceId }));
  }, []);

  useEffect(() => {
    if (bookings.length % DEFAULT_REQUEST_LIMIT != 0) {
      setIsLoadMore(false);
    }
  }, [bookings]);

  const _onRefresh = () => {
    setPage(0);
    dispatch(getBookingHistoryAction({ isAdmin, page: 0, workingSpaceId }));
  };

  const _onLoadMore = () => {
    if (isLoadMore) {
      const nextPage = page + 1;
      dispatch(getBookingHistoryAction({ isAdmin, page: nextPage, workingSpaceId }));
      setPage(nextPage);
    }
  };

  const renderItem = (data: BookingData) => {
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

  function onItemSelected(data: BookingData) {
    navigate(RouteName.BOOKING_DETAIL, { booking: data });
  }
  function handleBack() {
    props.navigation.goBack();
  }
};

export default Booking;
