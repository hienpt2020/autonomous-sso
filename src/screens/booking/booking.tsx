import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from 'src/components/empty';
import { BackHeader } from 'src/components/header';
import { getBookingHistoryAction } from 'src/redux/booking/bookingHistory/getBookingHistoryAction';
import { RootState } from 'src/redux/types';
import { styles } from './styles';
import { BookingData, Props } from './types';

const Booking = (props: Props) => {
  const { t } = useTranslation();
  const bookings: BookingData[] | undefined = useSelector(
    (state: RootState) => state.getBookingHistoryReducer.bookings,
  );
  const [page, setPage] = useState(0);
  const [isAdmin, setisAdmin] = useState(false);
  const [workingSpaceId, setWorkingSpaceId] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingHistoryAction({ isAdmin, page, workingSpaceId }));
  }, []);

  const _onRefresh = () => {};

  const _onLoadMore = () => {
    const nextPage = page + 1;
    dispatch(getBookingHistoryAction({ isAdmin, page: nextPage, workingSpaceId }));
    setPage(nextPage);
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
        {bookings ? (
          bookings.length > 0 ? (
            <FlatList
              // onRefresh={_onRefresh}
              onEndReachedThreshold={0}
              onEndReached={_onLoadMore}
              data={bookings}
              style={{ paddingStart: 8, paddingEnd: 8 }}
              keyExtractor={(item, index) => `${item.id}${index}`}
              renderItem={({ item }) => renderItem(item)}
            />
          ) : (
            <Empty />
          )
        ) : (
          <></>
        )}
      </SafeAreaView>
    </View>
  );

  function onItemSelected(data: BookingData) {
    console.log(data);
  }
  function handleBack() {
    props.navigation.goBack();
  }
};

export default Booking;
