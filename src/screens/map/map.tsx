import * as React from 'react'
import { FlatList, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { CardItem, CardData } from './card';
import { IconButton } from './iconbutton';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DatePicker from 'react-native-date-picker'
import { AppColor } from 'src/styles';
import { Link } from 'src/components/link';
import moment from 'moment';


const Map = (props: Props) => {

    const initialData: CardData[] = []
    const FIXED_ITEM_HEIGHT = 140
    const FIXED_DATE_TIME = 300
    const NUM_COLUMNS = 2
    const timeFormatter = "hh:mm MMM DD";
    const presenter: Presenter = new PresenterImpl()
    

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const { t } = useTranslation()
    const [mapData, setMapData] = useState(initialData)
    const [date, setDate] = useState(today)
    const [dateFrom, setDateFrom] = useState(today)
    const [dateTo, setDateTo] = useState(tomorrow)
    const [isFrom, setIsFrom] = useState(true)
    const [isBottomSheetShow, setIsBottomSheetShow] = useState(false)


    const sheetRef = useRef<BottomSheet | null>(null);
    useEffect(() => {
        setMapData(presenter.fetchMap())
    }, [])

    const renderItem = (data: CardData) => {
        return (<CardItem cardData={data} onPress={()=>onItemSelected(data)}/>)
    }

    const getItemLayout = (data: any, index: any) => {
        return ({
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
            index
        })
    }

    const renderContent = () => (
        <View style={styles.bottomSheetContainer}>
            <DatePicker
                date={date}
                onDateChange={(date) => setConsiderDate(date)}
            />
            <Link style={styles.button} size={16} title={t('common.close')} onPress={() => {
                sheetRef.current?.snapTo(2)
            }} />
        </View>
    );
    const renderOverlay = () => <TouchableWithoutFeedback style={styles.overlay} onPress={()=>{ sheetRef.current?.snapTo(2) }}><View style={styles.overlay}/></TouchableWithoutFeedback>

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BackHeader title={props.title} onPress={() => handleBack()} />
                <View style={styles.buttonContainer}>
                    <IconButton title={moment(dateFrom).format(timeFormatter)} onPress={() => switchFromDate()} />
                    <IconButton title={moment(dateTo).format(timeFormatter)} onPress={() => switchToDate()} />
                </View>
                <FlatList
                    data={mapData}
                    style={{ paddingStart: 8, paddingEnd: 8 }}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    numColumns={NUM_COLUMNS}
                    renderItem={({ item }) => renderItem(item)}
                    getItemLayout={(data, index) => getItemLayout(data, index)}
                />
            </SafeAreaView>
            { isBottomSheetShow ? renderOverlay() : null}
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
    )

    function onItemSelected(data: CardData){
        console.log(data)
    }
    function setConsiderDate(date: Date) {
        if (isFrom) {
            setDateFrom(date)
        } else {
            setDateTo(date)
        }
        setDate(date)
    }
    function switchFromDate() {
        setIsFrom(true)
        setDate(dateFrom)
        sheetRef.current?.snapTo(0)
    }
    function switchToDate() {
        setIsFrom(false)
        setDate(dateTo)
        sheetRef.current?.snapTo(0)
    }
    
    function handleBack() {
        props.navigation.goBack()
    }
};

export default Map;
