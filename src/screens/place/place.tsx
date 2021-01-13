import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Text, View, YellowBox } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { PrimaryButton } from 'src/components/button';
import { Chip } from 'src/components/chip';
import { Device } from 'src/components/device';
import { BackHeader } from 'src/components/header';
import { ImageSlider } from 'src/components/images/images';
import Booking from 'src/models/Booking';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkPlace from 'src/models/WorkPlace';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { bookPlace, getPlaceDetail } from './actions/placeAction';
import { styles } from './styles';
import { Props } from './types';
//JUST disable this warning
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BookingDetail = (props: Props) => {
  const { t } = useTranslation();
  const imageHeight = 221;
  const bookingHistory: BookingHistory | undefined = props.route.params.booking;
  const place: WorkPlace | undefined = props.route.params.place;
  const booking: Booking = useSelector((state: RootState) => state.booking.booking);
  const [placeData, setPlaceData] = useState<WorkPlace | undefined>(undefined);

  useEffect(() => {
    if (bookingHistory) {
      _getData(bookingHistory.mapId, bookingHistory.placeId);
    }
    if (place) {
      _getData(place.mapId, place.id);
    }
  }, []);

  const _getData = async (mapId: number, placeId: number) => {
    try {
      setPlaceData(await getPlaceDetail(mapId, placeId));
    } catch (error) {}
  };

  const _onPressBookPlace = async () => {
    try {
      if (place) {
        const bookingHistory: BookingHistory = await bookPlace(place.id, booking.from, booking.to);
        if (bookingHistory) {
          navigate(RouteName.BOOKING_RESULT, { booking: bookingHistory });
        }
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.container}>
        {placeData && placeData.imageUrls.length > 0 ? (
          <ImageSlider data={placeData.imageUrls} height={imageHeight} />
        ) : (
          <FastImage
            style={{ width: '100%', height: imageHeight }}
            source={{ uri: 'https://source.unsplash.com/wgivdx9dBdQ/1600x900' }}
          />
        )}
        <Text style={styles.title}>{placeData ? placeData.name : ''}</Text>
        <Text style={styles.subTitle}>{placeData ? placeData.address : ''}</Text>
        <Chip data={placeData ? placeData.tags : []} containerStyle={styles.chip} />

        {bookingHistory && (
          <>
            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>{t('common.code')}</Text>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ borderRadius: 8, borderWidth: 1, borderColor: '#000', padding: 8, fontSize: 32 }}>
                {bookingHistory.code}
              </Text>
            </View>
          </>
        )}
        <Text style={styles.sectionTitle}>{t('common.assets')}</Text>
        <Device data={placeData ? placeData.devices : []} containerStyle={styles.list} />
        <Text style={styles.sectionTitle}>{t('common.policies')}</Text>
        <Text style={styles.sectionContent}>{`• Keep the desk clean \n• Do not make noise while working`}</Text>
      </ScrollView>
      <PrimaryButton
        onPress={_onPressBookPlace}
        wrapperContainer={styles.button}
        title={t(bookingHistory ? 'booking_detail.cancel_booking' : 'place.book_place')}
      />

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
