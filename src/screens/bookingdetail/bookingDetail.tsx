import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { Chip } from 'src/components/chip';
import { ScrollView } from 'react-native-gesture-handler';
import { Device } from 'src/components/device';
import { YellowBox } from 'react-native';
import { ImageSlider } from 'src/components/images/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RouteName } from 'src/routers/routeName';
import { BookingData } from 'src/models/booking/bookingData';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceDetailAction } from 'src/redux/workplace/getPlaceDetail/getPlaceDetailAction';
import { RootState } from 'src/redux/types';
import PlaceData from 'src/models/place/placeData';
import FastImage from 'react-native-fast-image';
import { BackHeader } from 'src/components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
//JUST disable this warning
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const BookingDetail = (props: Props) => {
  const presenter: Presenter = new PresenterImpl();
  const { t } = useTranslation();
  const imageHeight = 221;

  const dispatch = useDispatch();

  const { booking }: { booking: BookingData } = props.route.params;
  const place: PlaceData | undefined = useSelector((state: RootState) => state.getPlaceDetailReducer.place);

  useEffect(() => {
    dispatch(getPlaceDetailAction({ placeId: booking.placeId, mapId: booking.mapId }));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.container}>
        {place && place.imageUrls.length > 0 ? (
          <ImageSlider data={place.imageUrls} height={imageHeight} />
        ) : (
          <FastImage
            style={{ width: '100%', height: 221 }}
            source={{ uri: 'https://source.unsplash.com/wgivdx9dBdQ/1600x900' }}
          />
        )}
        <Text style={styles.title}>{place ? place.name : ''}</Text>
        <Text style={styles.subTitle}>{place ? place.address : ''}</Text>
        <Chip data={place ? place.tags : []} containerStyle={styles.chip} />
        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>{t('common.code')}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ borderRadius: 8, borderWidth: 1, borderColor: '#000', padding: 8, fontSize: 32 }}>
            {booking.code}
          </Text>
        </View>
        <Text style={styles.sectionTitle}>{t('common.assets')}</Text>
        <Device data={place ? place.devices : []} containerStyle={styles.list} />
        <Text style={styles.sectionTitle}>{t('common.policies')}</Text>
        <Text style={styles.sectionContent}>{`• Keep the desk clean \n• Do not make noise while working`}</Text>
      </ScrollView>
      <PrimaryButton wrapperContainer={styles.button} title={t('booking_detail.cancel_booking')} />

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
