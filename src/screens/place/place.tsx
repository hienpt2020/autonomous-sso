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
import { getImage } from 'src/helpers/imageHelper';
import Asset from 'src/models/Asset';
import Booking from 'src/models/Booking';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkLayout from 'src/models/WorkLayout';
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
    try {
      if (place) {
        const bookingHistory: BookingHistory = await bookPlace(place.id, booking.from, booking.to);
        if (bookingHistory) {
          navigate(RouteName.BOOKING_RESULT, { booking: bookingHistory });
        }
      }
    } catch (error) {}
  };

  const _onPressDevice = (item: Asset) => {
    navigate(RouteName.CONFIGURATION_STEP1, null);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <ImageSlider
          containerStyle={{ marginBottom: 16 }}
          data={placeData ? placeData.imageUrls : []}
          height={imageHeight}
        />

        {placeData && (
          <>
            <Text style={styles.title}>{placeData.name}</Text>
            <Text style={styles.subTitle}>{workLayout.address}</Text>
            <Chip data={placeData.tags} containerStyle={styles.chip} />
          </>
        )}

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

        {placeData && placeData.devices.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{t('common.assets')}</Text>
            <Device
              data={placeData.devices}
              containerStyle={styles.list}
              isConfig={isAdmin && !bookingHistory}
              onPressDevice={_onPressDevice}
            />
          </>
        )}

        {workLayout && workLayout.policy ? (
          <>
            <Text style={styles.sectionTitle}>{t('common.policies')}</Text>
            <Text style={styles.sectionContent}>{workLayout.policy}</Text>
          </>
        ) : null}
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
