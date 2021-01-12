import * as React from 'react';
import { FlatList, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from 'src/components/header';
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { CardItem, CardData } from './card';
import { IconButton } from './iconbutton';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import { AppColor } from 'src/styles';
import { Link } from 'src/components/link';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../components/loading/loading';
import { Empty } from '../../components/empty';
import { getWorkplaceFilterByDateStartAction } from '../../redux/workplace/workplaceAction';
import { navigate } from 'src/routers/rootNavigation';

const Map = (props: Props) => {
  const initialData: CardData[] = [];
  const FIXED_ITEM_HEIGHT = 140;
  const FIXED_DATE_TIME = 300;
  const NUM_COLUMNS = 2;
  const HOUR_GAP = 2;
  const timeFormatter = 'hh:mm MMM DD';
  const presenter: Presenter = new PresenterImpl();
  const today = new Date();
  today.setHours(today.getHours() + 1, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setHours(tomorrow.getHours() + HOUR_GAP);

  const { t } = useTranslation();
  const [mapData, setMapData] = useState(initialData);
  const [date, setDate] = useState(today);
  const [dateFrom, setDateFrom] = useState(today);
  const [dateTo, setDateTo] = useState(tomorrow);
  const [isFrom, setIsFrom] = useState(true);
  const [isBottomSheetShow, setIsBottomSheetShow] = useState(false);
  const { filter } = useSelector((state) => state.workplaceReducer);
  const sheetRef = useRef<BottomSheet | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getWorkplaceFilterByDateStartAction(
        props.route.params.floorId,
        moment(dateFrom).toISOString(),
        moment(dateTo).toISOString(),
      ),
    );
  }, []);
  const renderItem = (data: CardData) => {
    return <CardItem cardData={data} onPress={() => onItemSelected(data)} />;
  };

  const getItemLayout = (data: any, index: any) => {
    return {
      length: FIXED_ITEM_HEIGHT,
      offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
      index,
    };
  };

  const renderContent = () => (
    <View style={styles.bottomSheetContainer}>
      <DatePicker date={date} onDateChange={(date) => setConsiderDate(date)} />
      <Link
        style={styles.button}
        size={16}
        title={t('common.close')}
        onPress={() => {
          sheetRef.current?.snapTo(2);
        }}
      />
    </View>
  );
  const renderOverlay = () => (
    <TouchableWithoutFeedback
      style={styles.overlay}
      onPress={() => {
        sheetRef.current?.snapTo(2);
      }}>
      <View style={styles.overlay} />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <BackHeader title={props.route.params.floorName} onPress={() => handleBack()} />
        <View style={styles.buttonContainer}>
          <IconButton title={moment(dateFrom).format(timeFormatter)} onPress={() => switchFromDate()} />
          <IconButton title={moment(dateTo).format(timeFormatter)} onPress={() => switchToDate()} />
        </View>
        {filter.isLoading ? (
          <Loading />
        ) : filter.items.length > 0 ? (
          <FlatList
            data={presenter.formatData(filter.items)}
            style={{ paddingStart: 8, paddingEnd: 8 }}
            keyExtractor={(item, index) => `${item.id}${index}`}
            numColumns={NUM_COLUMNS}
            renderItem={({ item }) => renderItem(item)}
            getItemLayout={(data, index) => getItemLayout(data, index)}
          />
        ) : (
          <Empty />
        )}
      </SafeAreaView>
      {isBottomSheetShow ? renderOverlay() : null}
      <BottomSheet
        ref={sheetRef}
        snapPoints={[FIXED_DATE_TIME, 0, 0]}
        initialSnap={1}
        renderContent={renderContent}
        enabledContentTapInteraction={false}
        onOpenEnd={() => setIsBottomSheetShow(true)}
        onCloseEnd={() => setIsBottomSheetShow(false)}
        enabledInnerScrolling={false}
      />
    </View>
  );

  function onItemSelected(data: CardData) {
    navigate(RouteName.SEAT, { place: data });
  }
  function setConsiderDate(date: Date) {
    let _dateFrom = dateFrom;
    let _dateTo = dateTo;
    if (isFrom) {
      if (moment(_dateTo).diff(moment(_dateFrom), 'hours') > 2) {
        _dateTo.setHours(date.getHours() + HOUR_GAP);
      }
      setDateFrom(date);
      setDateTo(_dateTo);
    } else {
      _dateFrom.setHours(date.getHours() - HOUR_GAP);
      setDateFrom(_dateFrom);
      setDateTo(date);
    }
    setDate(date);
    dispatch(
      getWorkplaceFilterByDateStartAction(
        props.route.params.floorId,
        moment(_dateFrom).toISOString(),
        moment(_dateTo).toISOString(),
      ),
    );
  }
  function switchFromDate() {
    setIsFrom(true);
    setDate(dateFrom);
    sheetRef.current?.snapTo(0);
  }
  function switchToDate() {
    setIsFrom(false);
    setDate(dateTo);
    sheetRef.current?.snapTo(0);
  }

  function handleBack() {
    props.navigation.goBack();
  }
};

export default Map;
