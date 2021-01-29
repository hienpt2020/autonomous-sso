import moment from 'moment';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { AppView, Space } from 'src/components';
import { BackHeader, LargeHeader } from 'src/components/header';
import LayoutInfo from 'src/components/layoutInfo';
import { Link } from 'src/components/link';
import TimeSelect from 'src/components/timeSelect';
import Booking from 'src/models/Booking';
import WorkLayout from 'src/models/WorkLayout';
import WorkPlace from 'src/models/WorkPlace';
import { setBookingDataAction } from 'src/redux/booking/bookingAction';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { Empty } from '../../components/empty';
import { Loading } from '../../components/loading/loading';
import { getAvailableWorkPlace } from './actions/mapAction';
import { CardItem } from './card';
import { styles } from './styles';
import { Props } from './types';

const Map = (props: Props) => {
    const FIXED_ITEM_HEIGHT = 140;
    const FIXED_DATE_TIME = 300;
    const NUM_COLUMNS = 2;
    const HOUR_GAP = 2;
    const today = new Date();
    if (today.getMinutes() % 30 != 0) {
        if (today.getMinutes() > 30) {
            today.setHours(today.getHours() + 1, 0, 0, 0);
        } else {
            today.setMinutes(30, 0, 0);
        }
    }
    const tomorrow = new Date(today);
    tomorrow.setHours(tomorrow.getHours() + HOUR_GAP);

    const map: WorkLayout = props.route.params.map;
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
            setWorkPlaces(await getAvailableWorkPlace(map.id, moment(from).toISOString(), moment(to).toISOString()));
        } catch (error) {}
        setIsLoading(false);
    };

    const renderItem = (data: WorkPlace, index: number) => {
        return <CardItem cardData={data} index={index} onPress={() => onItemSelected(data)} />;
    };

    const getItemLayout = (data: any, index: any) => {
        return {
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
            index,
        };
    };

    const renderContent = () => {
        let minDate;
        if (isFrom) {
            minDate = today;
        } else {
            minDate = tomorrow;
        }

        return (
            <View style={styles.bottomSheetContainer}>
                <DatePicker
                    minuteInterval={30}
                    date={date}
                    onDateChange={(date) => setConsiderDate(date)}
                    minimumDate={minDate}
                />
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
    };
    const renderOverlay = () => (
        <TouchableWithoutFeedback
            style={styles.overlay}
            onPress={() => {
                sheetRef.current?.snapTo(2);
                setIsBottomSheetShow(false);
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
            if (moment(_dateTo).diff(moment(date), 'hours') < 2) {
                _dateTo = moment(date).add(HOUR_GAP, 'hours').toDate();
            }
            _dateFrom = date;
            setDateFrom(date);
            setDateTo(_dateTo);
        } else {
            if (moment(date).diff(moment(_dateFrom), 'hours') < 2) {
                _dateFrom = moment(date).subtract(HOUR_GAP, 'hours').toDate();
            }
            _dateTo = date;
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
        <View style={styles.container}>
            <BackHeader title={map.name} onPress={() => handleBack()} />

            {/* {isLoading ? (
                <Loading />
            ) : workPlaces.length > 0 ? ( */}
            <FlatList
                data={workPlaces}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24, flexGrow: 1 }}
                keyExtractor={(item, index) => `${item.id.toString()}${index}`}
                numColumns={NUM_COLUMNS}
                renderItem={({ item, index }) => renderItem(item, index)}
                // getItemLayout={(data, index) => getItemLayout(data, index)}
                ItemSeparatorComponent={() => <Space height={AppSpacing.MEDIUM} />}
                ListFooterComponent={() =>
                    isLoading ? (
                        <View style={{ height: 100 }}>
                            <Loading />
                        </View>
                    ) : workPlaces.length == 0 ? (
                        <Empty />
                    ) : (
                        <View></View>
                    )
                }
                ListHeaderComponent={
                    <AppView>
                        <Space height={30} />

                        <LayoutInfo workLayout={map} />

                        <Space height={AppSpacing.LARGE} />

                        <LargeHeader title={t('office.title')} subTitle={t('office.sub_title')} />

                        <Space height={AppSpacing.LARGE} />

                        <TimeSelect
                            style={styles.timeSelect}
                            from={dateFrom}
                            to={dateTo}
                            onPressFrom={() => switchFromDate()}
                            onPressTo={() => switchToDate()}
                        />

                        <Space height={AppSpacing.LARGE} />
                    </AppView>
                }
            />
            {/* ) : (
                <Empty />
            )} */}

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
