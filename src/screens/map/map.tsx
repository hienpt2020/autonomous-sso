import moment from 'moment';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { BackHeader } from 'src/components/header';
import { Link } from 'src/components/link';
import WorkPlace from 'src/models/WorkPlace';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { Empty } from '../../components/empty';
import { Loading } from '../../components/loading/loading';
import { getAvailableWorkPlace } from './actions/mapAction';
import { CardItem } from './card';
import { IconButton } from './iconbutton';
import { styles } from './styles';
import { Props } from './types';
import { setBookingDataAction } from 'src/redux/booking/bookingAction';
import Booking from 'src/models/Booking';

const Map = (props: Props) => {
    const FIXED_ITEM_HEIGHT = 140;
    const FIXED_DATE_TIME = 300;
    const NUM_COLUMNS = 2;
    const HOUR_GAP = 2;
    const timeFormatter = 'hh:mm MMM DD';
    const today = new Date();
    today.setHours(today.getHours() + 1, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setHours(tomorrow.getHours() + HOUR_GAP);

    const { t } = useTranslation();
    const [date, setDate] = useState(today);
    const [dateFrom, setDateFrom] = useState(today);
    const [dateTo, setDateTo] = useState(tomorrow);
    const [isFrom, setIsFrom] = useState(true);
    const [isBottomSheetShow, setIsBottomSheetShow] = useState(false);
    const sheetRef = useRef<BottomSheet | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [workPlaces, setWorkPlaces] = useState<WorkPlace[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        _getData(dateFrom, dateTo);
    }, []);

    const _getData = async (from: Date, to: Date) => {
        setIsLoading(true);
        try {
            setWorkPlaces(
                await getAvailableWorkPlace(
                    props.route.params.floorId,
                    moment(from).toISOString(),
                    moment(to).toISOString(),
                ),
            );
        } catch (error) {}
        setIsLoading(false);
    };

    const renderItem = (data: WorkPlace) => {
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
            }}
        >
            <View style={styles.overlay} />
        </TouchableWithoutFeedback>
    );

    function onItemSelected(data: WorkPlace) {
        navigate(RouteName.PLACE_DETAIL, { place: data });
        dispatch(setBookingDataAction(new Booking(dateFrom, dateTo, data.code)));
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
        _getData(_dateFrom, _dateTo);
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

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BackHeader title={props.route.params.floorName} onPress={() => handleBack()} />
                <View style={styles.buttonContainer}>
                    <IconButton title={moment(dateFrom).format(timeFormatter)} onPress={() => switchFromDate()} />
                    <IconButton title={moment(dateTo).format(timeFormatter)} onPress={() => switchToDate()} />
                </View>
                {isLoading ? (
                    <Loading />
                ) : workPlaces.length > 0 ? (
                    <FlatList
                        data={workPlaces}
                        style={{ paddingStart: 8, paddingEnd: 8 }}
                        keyExtractor={(item, index) => `${item.id.toString()}${index}`}
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
};

export default Map;
